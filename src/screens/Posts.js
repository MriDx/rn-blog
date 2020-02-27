import React, { Component, Children } from "react";
import {
  View,
  Text,
  Platform,
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  Image,
  Linking
} from "react-native";
import {
  _getAllPosts,
  _login,
  _getUser,
  _getAllCategories,
  _postByCategory,
  _signup
} from "../methods";
import { styles } from "../styles";
//import { PostUI } from "./Postview";
import Modal from "modal-enhanced-react-native-web";
import { Seperator, PostUI } from "../components";
import { login } from "../consts";
import { AsyncStorage, ScrollView } from "react-native-web";
import { Icon } from "../icons";
import { SideDrawerMenu } from "../components/side_drawer";
import { TopSection } from "../components/top_section";
import { QuickView } from "../methods/modal_methods";
import NavigationEvents from "@react-navigation/core/lib/commonjs/views/NavigationEvents";
import { CreatePost } from "../components/CreatePost";

class Posts extends Component {
  constructor(props) {
    super(props);
    console.log("init" + JSON.stringify(props));
    this.state = {
      posts: [],
      categories: [],
      currentPosts: [],
      showCurrentPost: false,
      loading: true,
      showPost: false,
      post: null,
      visibleModal: false,
      email: "",
      password: "",
      loginLoading: false,
      snackbar: false,
      user: null,
      showLogin: true,
      showMenu: false,
      quickView: false,
      asktoSignup: false,
      showCategories: false,
      selectedCategory: "",
      showCreatePost: false
    };
  }

  componentDidMount() {
    _getAllPosts()
      .then(response => response.json())
      .then(res => this.setState({ posts: res.posts }))
      .then(
        _getAllCategories()
          .then(response => response.json())
          .then(res =>
            res.status === "success"
              ? this.setState({ categories: res.categories, loading: false })
              : null
          )
          .catch(error => console.log(error))
      )
      .catch(error => console.log(error));

    this._getUser();
  }
  /* get user if logged in */
  _getUser = async () => {
    const token = await AsyncStorage.getItem("token");
    console.warn("this is token " + token);
    _getUser([token])
      .then(response => response.json())
      .then(
        res => (
          this.setState({ user: res.user, showLogin: false }),
          console.log("response " + res.user)
        )
      )
      .catch(error => console.log("error" + error));
  };

  /*  To render posts */
  _renderPosts = item => {
    return (
      <TouchableOpacity
        onPress={() => this.setState({ quickView: true, post: item })}
      >
        <PostView
          title={item.title}
          content={item.content}
          author={[item.author.name, item.author.email]}
          comments={item.__meta__.total_comments}
          onQuickView={this._toggleQuickview}
        />
      </TouchableOpacity>
    );
  };
  /* go back to home @not is used */
  _goback = () => {
    this.setState({ showPost: false });
  };

  /* to toggle modal */
  toogleModal = () => {
    this.setState({
      visibleModal: !this.state.visibleModal,
      asktoSignup: this.state.visibleModal ? null : false
    });
  };

  /* set email from text input */
  _setName = props => {
    this.setState({ name: props });
  };
  /* set email from text input */
  _setEmail = props => {
    this.setState({ email: props });
  };
  /* set password from textinput */
  _setPassword = props => {
    this.setState({ password: props });
  };
  /* login method */
  _onLogin = props => {
    this.setState({ loginLoading: true });
    _login(["POST", this.state.email, this.state.password])
      .then(response => response.json())
      .then(res =>
        res.status === "success"
          ? (this.setState({
              token: res.token.token,
              loginLoading: false,
              visibleModal: false,
              snackbar: true,
              name: "",
              email: "",
              password: ""
            }),
            this._fireSnackbarTimeoutandSaveToken())
          : (this.setState({ loginLoading: false, asktoSignup: true }),
            console.log(res))
      )
      .catch(error => console.error(error));
  };

  _onSignup = () => {
    this.setState({ loginLoading: true });
    _signup(["POST", this.state.name, this.state.email, this.state.password])
      .then(response => response.json())
      .then(res =>
        res.status === "success"
          ? (this.setState({
              token: res.user.token,
              loginLoading: false,
              visibleModal: false,
              snackbar: true,
              name: "",
              email: "",
              password: ""
            }),
            this._fireSnackbarTimeoutandSaveToken())
          : null
      )
      .catch(error => console.log(error));
  };

  /* logout method */
  onLogout = async () => {
    await AsyncStorage.removeItem("token");
    this.setState({ showLogin: true, user: null });
  };
  /* login success methog */
  _fireSnackbarTimeoutandSaveToken = async () => {
    setTimeout(() => this.setState({ snackbar: false }), 1000 * 3);
    await AsyncStorage.setItem("token", this.state.token).then(() =>
      this._getUser()
    );
    const token = await AsyncStorage.getItem("token");
    //this._getUser();
    console.log(token);
  };

  /* quick post view toggle */
  _toggleQuickview = props => {
    this.setState({ quickView: !this.state.quickView });
  };

  /* success modal */
  _showLoginSuccess = props => {
    return (
      <Modal
        isVisible={this.state.snackbar}
        backdropOpacity={0}
        animationIn="slideInLeft"
        animationOut="slideOutLeft"
      >
        <View style={{ flex: 1, justifyContent: "flex-end" }}>
          <View
            style={{
              width: 250,
              height: 56,
              backgroundColor: "#000",
              alignSelf: "flex-start",
              marginBottom: 20,
              borderRadius: 3,
              justifyContent: "center"
            }}
          >
            <Text
              style={{
                fontSize: 16,
                color: "#c3f5ba",
                alignSelf: "flex-start",
                paddingStart: 5,
                paddingEnd: 5,
                marginStart: 10
              }}
            >
              Success
            </Text>
          </View>
        </View>
      </Modal>
    );
  };

  /* side menu renderer */
  _renderSideMenu = () => {
    return (
      <SideDrawerMenu
        modalVisible={this.state.showMenu}
        closeMenu={this._toogleMenu}
        user={this.state.user}
        categories={this.state.categories}
        onCategory={this._onCategory}
        onSignin={this._showLogin}
        toggleModals={this._toggleModals}
        hideMenuAndOpenCreatePost={this._hideMenuAndOpenCreatePost}
      />
    );
  };
  /* toggle side menu */
  _toogleMenu = () => {
    this.setState({ showMenu: false });
  };

  _showLogin = () => {
    this.setState({ visibleModal: true, showMenu: false });
  };

  _onCategory = props => {
    this.setState({ loading: true, showMenu: false });
    _postByCategory(props.id)
      .then(response => response.json())
      .then(res =>
        res.status === "success"
          ? this.setState({ posts: res.posts, loading: false })
          : null
      )
      .catch(error => console.log(error));
  };

  _showPostEditor = props => {
    return (
      <CreatePost
        modalVisible={this.state.showCreatePost}
        closeMenu={this._toogleMenu}
        user={this.state.user}
        categories={this.state.categories}
        onCategory={this._onCategory}
        onSignin={this._showLogin}
        showCategories={this.state.showCategories}
        _toggleCategories={this._toggleCategories}
        categoris={this.state.categories}
        selectedCategory={this.state.selectedCategory}
        setSelectedCategory={this._setCategorySelected}
        toggleModals={this._toggleModals}
      />
    );
  };

  _hideMenuAndOpenCreatePost = () => {
    this._toggleModals({ id: 0 });
    this.setState({ showMenu: false });
  };

  _toggleModals = props => {
    props.id === 0
      ? this.setState({ showCreatePost: !this.state.showCreatePost })
      : this.setState({ showCategories: !this.state.showCategories });
  };

  _toggleCategories = () => {
    this.setState({ showCategories: !this.state.showCategories });
  };
  _setCategorySelected = props => {
    console.log("from main " + props.name);
    this.setState({ selectedCategory: props });
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        {this._renderSideMenu()}
        {this._showPostEditor()}

        <QuickPostView
          visibleModal={this.state.quickView}
          toggle={this._toggleQuickview}
          post={this.state.post}
          scrollViewRef={this.scrollViewRef}
          _handleOnScroll={this._handleOnScroll}
        />
        <Header
          onLogin={this.toogleModal}
          showLogin={this.state.showLogin}
          user={this.state.user}
          onLogout={this.onLogout}
          onMenu={() => this.setState({ showMenu: true })}
        />
        {this._showLoginSuccess()}
        {/* <NavigationEvents
          onWillFocus={payload => console.log("will focus", payload)}
          onDidFocus={payload => console.log("did focus", payload)}
          onWillBlur={payload => console.log("will blur", payload)}
          onDidBlur={payload => console.log("did blur", payload)}
        /> */}
        <LoginModal
          visibleModal={this.state.visibleModal}
          hideModal={this.toogleModal}
          setName={this._setName}
          setEmail={this._setEmail}
          setPassword={this._setPassword}
          email={this.state.email}
          name={this.state.name}
          password={this.state.password}
          onLogin={this._onLogin}
          loading={this.state.loginLoading}
          asktoSignup={this.state.asktoSignup}
          onSignup={this._onSignup}
        />
        <TopSection />
        <View style={{ backgroundColor: "#F7FAFC" }}>
          <View
            style={{
              width: "80%",
              alignSelf: "center",
              flexDirection: "row"
            }}
          >
            <View
              style={{
                width: "65%",
                alignSelf: "flex-start"
              }}
            >
              <View
                style={{
                  width: "90%",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: 20,
                  padding: 10,
                  alignSelf: "center"
                }}
              >
                <Text
                  style={{
                    fontFamily: "BlinkMacSystemFont",
                    fontSize: 24,
                    fontWeight: "700",
                    color: "#4a5568"
                  }}
                >
                  Latest Articles
                </Text>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate("Post", { id: 1 })
                  }
                >
                  <View>
                    <Text
                      style={{
                        fontFamily: "BlinkMacSystemFont",
                        fontSize: 20,
                        fontWeight: "400",
                        color: "#4a5568"
                      }}
                    >
                      View All
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              {this.state.loading ? (
                <ActivityIndicator size="large" />
              ) : this.state.showPost ? (
                <PostUI post={this.state.post} onBack={this._goback} />
              ) : this.state.posts.length > 0 ? (
                <FlatList
                  style={{
                    alignSelf: "center",
                    width:
                      Dimensions.get("window").width > 720 ? "90%" : "100%",
                    marginTop: 10
                  }}
                  data={this.state.posts}
                  ref={flatList => (this.postsList = flatList)}
                  renderItem={({ item }) => this._renderPosts(item)}
                  keyExtractor={(item, index) => index.toString()}
                ></FlatList>
              ) : (
                <View
                  style={{
                    height: 70,
                    shadowOffset: { width: 1, height: 1 },
                    shadowColor: "gray",
                    shadowRadius: 10,
                    borderRadius: 10,
                    shadowOpacity: 0.3,
                    alignSelf: "center",
                    width:
                      Dimensions.get("window").width > 720 ? "90%" : "100%",
                    margin: 10,
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <Text
                    style={{
                      fontWeight: "600",
                      fontSize: 16,
                      color: "#4A5568"
                    }}
                  >
                    No Articles found
                  </Text>
                </View>
              )}
            </View>
            <View style={{ width: "35%" }}>
              <View
                style={{
                  width: "100%",
                  height: undefined,
                  maxHeight: 500,
                  backgroundColor: "#FEFAF0",
                  shadowRadius: 5,
                  shadowColor: "gray",
                  shadowOpacity: 0.8,
                  marginTop: 65,
                  borderRadius: 10
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginStart: 20,
                    marginEnd: 20
                  }}
                >
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "400",
                      marginTop: 15,
                      fontFamily: "BlinkMacSystemFont",
                      color: "#4A5568"
                    }}
                  >
                    Categories
                  </Text>
                  <TouchableOpacity>
                    <View>
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: "400",
                          marginTop: 15,
                          fontFamily: "BlinkMacSystemFont",
                          color: "#4A5568"
                        }}
                      >
                        View All
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <FlatList
                  style={{
                    marginStart: 20,
                    marginEnd: 20,
                    marginBottom: 20,
                    marginTop: 10
                  }}
                  data={this.state.categories}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      onPress={() => this._onCategory({ id: item.id })}
                    >
                      <View>
                        <Text
                          style={{
                            fontSize: 18,
                            paddingTop: 5,
                            color: "#4A5568"
                          }}
                        >
                          {" "}
                          {item.name}{" "}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  )}
                  keyExtractor={(item, index) => index.toString()}
                />
              </View>
              <Seperator height={20} />
              <AdvertiseWithUs
                header="Advertise with us"
                height={250}
                width="100%"
                backgroundColor="#E5F4F8"
              >
                <View
                  style={{
                    height: "100%",
                    flexDirection: "column",
                    justifyContent: "space-between"
                  }}
                >
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "600",
                      color: "#4A5568",
                      marginTop: 20
                    }}
                  >
                    Connect with the largest audience of active, influencial job
                    creators, job seekers and workaholics.
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center"
                    }}
                  >
                    <TouchableOpacity>
                      <View
                        style={{
                          width: 150,
                          height: 40,
                          backgroundColor: "#fff",
                          borderRadius: 10,
                          alignItems: "center",
                          justifyContent: "center",
                          shadowRadius: 10,
                          shadowOpacity: 0.5,
                          shadowColor: "gray",
                          shadowOffset: { width: 1, height: 1 },
                          alignSelf: "center"
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 16,
                            fontWeight: "500",
                            color: "#4A5568"
                          }}
                        >
                          Get in touch
                        </Text>
                      </View>
                    </TouchableOpacity>
                    <Image
                      source={require("../images/adswithus.svg")}
                      style={{ width: 100, height: 100 }}
                      resizeMethod="scale"
                      resizeMode="stretch"
                    />
                  </View>
                </View>
              </AdvertiseWithUs>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const QuickPostView = props => {
  return props.post != null ? (
    <Modal
      isVisible={props.visibleModal}
      onBackdropPress={() => props.toggle()}
      backdropOpacity={0.5}
      style={{ marginTop: 20, marginBottom: 20 }}
    >
      <View
        style={{
          width: "60%",
          height: "100%",
          backgroundColor: "#EEF8F4",
          alignSelf: "center",
          borderRadius: 15,
          flexDirection: "column",
          justifyContent: "space-between"
        }}
      >
        <View>
          <View>
            <Text
              style={{
                alignSelf: "center",
                fontSize: 24,
                fontWeight: "700",
                margin: 20
              }}
            >
              {" "}
              {props.post.title}{" "}
            </Text>
          </View>
          <ScrollView
            style={{
              width: "90%",
              height: Dimensions.get("window").height - 200,
              padding: 10,
              shadowOpacity: 0.5,
              shadowColor: "gray",
              shadowOffset: { width: 0, height: 2 },
              alignSelf: "center",
              shadowRadius: 10,
              borderRadius: 10
            }}
          >
            <View
              style={{
                width: "100%",
                height: "100%",
                flexWrap: "wrap",
                alignSelf: "center",
                justifyContent: "space-between",
                flexDirection: "column",
                margin: 10
              }}
            >
              <Text
                numberOfLines={5}
                ellipsizeMode="tail"
                style={{ lineHeight: 20, fontSize: 16 }}
              >
                {props.post.content}
              </Text>
            </View>
          </ScrollView>
        </View>
        <View
          style={{
            width: "80%",
            height: 100,
            borderBottomEndRadius: 10,
            borderBottomStartRadius: 10,
            justifyContent: "space-between",
            alignSelf: "center",
            alignItems: "center",
            flexDirection: "row"
          }}
        >
          <TouchableOpacity>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Icon name="forum" size={24} color="#000" />
              <Text style={{ color: "#000", alignSelf: "center" }}>
                {props.post.__meta__.total_comments}{" "}
              </Text>
            </View>
          </TouchableOpacity>
          <View>
            <TouchableOpacity>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  alignContent: "center"
                }}
              >
                <Icon name="account" size={24} color="#000" />
                <Text>{props.post.author.name}</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  ) : null;
};
const LoginModal = props => {
  return (
    <Modal
      isVisible={props.visibleModal}
      onBackdropPress={() => props.hideModal()}
    >
      <View
        style={{
          backgroundColor: "#d0eaff",
          width: "30%" > 400 ? "30%" : 400,
          alignSelf: "center",
          height: Dimensions.get("window").height / 1.5,
          maxHeight: 500,
          minHeight: 300,
          borderRadius: 4
        }}
      >
        <Text style={{ fontSize: 26, alignSelf: "center", margin: 10 }}></Text>
        {/* <Seperator height={150} width="100%" /> */}
        <Image
          source={require("../images/login_icon.svg")}
          style={{
            width: 200,
            height: 100,
            alignSelf: "center",
            marginTop: 10,
            marginBottom: 10
          }}
        />

        {props.asktoSignup ? (
          <View style={{}}>
            <Text
              style={{
                alignSelf: "center",
                textAlign: "center",
                fontSize: 16,
                fontWeight: "400",
                padding: 10
              }}
            >
              It seems like you are new here ! Well you can continue just by
              entering your name
            </Text>
            <TextInput
              textContentType="name"
              onChangeText={text => props.setName(text)}
              style={styles.textInputStyle}
              placeholder="Full Name"
              value={props.name}
              onSubmitEditing={() => this.emailField.focus()}
            />
          </View>
        ) : (
          <Seperator height={70} />
        )}

        <TextInput
          textContentType="emailAddress"
          onChangeText={text => props.setEmail(text)}
          style={styles.textInputStyle}
          placeholder="Email"
          value={props.email}
          onSubmitEditing={() => this.secondTextInput.focus()}
          ref={input => (this.emailField = input)}
        />
        <TextInput
          textContentType="password"
          onChangeText={text => props.setPassword(text)}
          secureTextEntry
          style={styles.textInputStyle}
          placeholder="Password"
          value={props.password}
          returnKeyType="go"
          ref={input => (this.secondTextInput = input)}
          onSubmitEditing={() =>
            props.asktoSignup ? props.onSignup() : props.onLogin()
          }
        />
        <Seperator width="100%" height={10} />
        <TouchableOpacity
          ref={view => (this.view = view)}
          onPress={() =>
            props.asktoSignup ? props.onSignup() : props.onLogin()
          }
          disabled={props.loading}
        >
          <View
            style={{
              alignSelf: "center",
              width: "30%",
              height: 50,
              backgroundColor: "#33a4ff",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 5
            }}
          >
            {props.loading ? (
              <ActivityIndicator size="small" color="#a9d8ff" />
            ) : (
              <Text style={{ fontWeight: "600", color: "#fff" }}>
                Let's start
              </Text>
            )}
          </View>
        </TouchableOpacity>
        {/* <Text style={{ alignSelf: "center", margin: 10 }}>OR</Text>
        <TouchableOpacity
          onPress={() => props.onLogin()}
          disabled={props.loading}
        >
          <View
            style={{
              alignSelf: "center",
              width: "50%",
              height: 50,
              backgroundColor: "#33a4ff",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 5
            }}
          >
            {props.loading ? (
              <ActivityIndicator size="small" color="#a9d8ff" />
            ) : (
              <Text style={{ fontWeight: "600", color: "#fff" }}>
                Create an account
              </Text>
            )}
          </View>
        </TouchableOpacity> */}
      </View>
    </Modal>
  );
};

const Header = props => {
  return (
    <View
      style={{
        flexDirection: "row",
        height: Dimensions.get("window").width > 720 ? 100 : 56,
        backgroundColor: /* "#d0eaff" */ "#fff",
        justifyContent: "center"
      }}
    >
      <View
        style={{
          width: "75%",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "row",
          alignSelf: "center",
          paddingStart: 20
        }}
      >
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <TouchableOpacity onPress={() => props.onMenu()}>
            <View>
              <Icon
                name="sort-variant"
                /* color="#5ab5ff" */ color="#3C98B5"
                size={30}
              />
            </View>
          </TouchableOpacity>
          <Seperator width={5} height={0} />
          <Text
            style={{
              fontSize: Dimensions.get("window").width > 720 ? 26 : 20,
              fontWeight: "bold",
              /* color: "#5ab5ff" */
              color: "#3C98B5"
            }}
          >
            Blog
          </Text>
        </View>
        <View
          style={{
            marginEnd: 0,
            flexDirection: "row"
          }}
        >
          {props.showLogin ? (
            <TouchableWithoutFeedback
              onPress={() => props.onLogin()}
              style={{ paddingStart: 5, paddingEnd: 5 }}
            >
              <View>
                <Icon
                  name="account"
                  /* color="#5ab5ff" */ color="#3C98B5"
                  size={30}
                />
              </View>
            </TouchableWithoutFeedback>
          ) : (
            <TouchableOpacity onPress={() => props.onLogout()}>
              <View>
                <Text
                  style={{
                    textTransform: "capitalize",
                    fontSize: 16,
                    fontWeight: "bold",
                    color: "gray"
                  }}
                >
                  {" "}
                  Hello {props.user.name.split(" ")[0]}
                </Text>
              </View>
            </TouchableOpacity>
          )}
          <View style={{ width: 5 }} />
        </View>
      </View>
    </View>
  );
};

const PostView = props => {
  return (
    <View
      style={{
        shadowColor: "grey",
        shadowOffset: { height: 2, width: 0 },
        shadowRadius: 5,
        shadowOpacity: 0.5,
        margin: 10,
        marginBottom: 3,
        borderRadius: 10,
        paddingStart: 20,
        paddingEnd: 20,
        backgroundColor: "#fff",
        height: 150,
        elevation: 10,
        justifyContent: "center"
      }}
    >
      <Text style={{ fontSize: 20, margin: 5, fontWeight: "bold" }}>
        {props.title}
      </Text>
      <Text
        style={{ fontSize: 16 }}
        lineBreakMode="tail"
        numberOfLines={1}
        ellipsizeMode="tail"
      >
        {" "}
        {props.content}
      </Text>
      <View style={{ flexDirection: "row", padding: 5 }}>
        <Text style={{ fontSize: 12, fontStyle: "normal", marginBottom: 2 }}>
          author
          <Text
            style={{ fontSize: 14, fontStyle: "normal", fontWeight: "400" }}
          >
            {" "}
            {props.author[0]} {" , "} {props.author[1]}{" "}
          </Text>{" "}
        </Text>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ flexDirection: "row" }}>
          <Icon name="forum" size={20} color="#000" />
          <Text style={{ fontSize: 14, alignSelf: "center", marginStart: 5 }}>
            {props.comments}
          </Text>
        </View>
        <View>
          <TouchableOpacity style={{}} onPress={() => props.onQuickView()}>
            <View>
              <Text>Quick View</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const AdvertiseWithUs = props => {
  console.log(props);
  return (
    <View
      style={{
        width: props.width,
        height: props.height,
        shadowColor: "gray",
        shadowOpacity: 0.5,
        shadowRadius: 10,
        borderRadius: 10,
        backgroundColor: props.backgroundColor,
        padding: 20,
        shadowOffset: { width: 1, height: 1 }
      }}
    >
      <Text
        style={{
          alignSelf: "flex-start",
          fontSize: 18,
          fontWeight: "bold",
          fontFamily: "BlinkMacSystemFont",
          color: "#4A5568"
        }}
      >
        {props.header}
      </Text>
      {props.children}
    </View>
  );
};

let hotWrapper = () => () => Posts;
if (Platform.OS === "web") {
  const { hot } = require("react-hot-loader");
  hotWrapper = hot;
}
export default hotWrapper(module)(Posts);

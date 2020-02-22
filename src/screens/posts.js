import React, { Component } from "react";
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
  TextInput
} from "react-native";
import { _getAllPosts, _login, _getUser } from "../methods";
import { styles } from "../styles";
import PostViewUI, { PostUI } from "./postview";
import Modal from "modal-enhanced-react-native-web";
import { Seperator } from "../components";
import { login } from "../consts";
import { AsyncStorage } from "react-native-web";
import {
  FontAwesome,
  Feather,
  Ionicons,
  MaterialCommunityIcons
} from "react-web-vector-icons";
import { Icon } from "../icons";
import { SideDrawerMenu } from "../components/side_drawer";
import { TopSection } from "../components/top_section";

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      loading: true,
      showPost: false,
      post: "",
      visibleModal: false,
      email: "",
      password: "",
      loginLoading: false,
      snackbar: false,
      user: "",
      showLogin: true,
      showMenu: false
    };
  }

  componentDidMount() {
    _getAllPosts()
      .then(response => response.json())
      .then(res => this.setState({ posts: res.posts, loading: false }));

    this._getUser();
  }
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

  _renderPosts = item => {
    return (
      <TouchableOpacity
        onPress={() => this.setState({ showPost: true, post: item })}
      >
        <PostView
          title={item.title}
          content={item.content}
          author={[item.author.name, item.author.email]}
          comments={item.__meta__.total_comments}
        />
      </TouchableOpacity>
    );
  };
  _goback = () => {
    this.setState({ showPost: false });
  };

  _renderButton = (text, onPress) => (
    <TouchableOpacity onPress={onPress}>
      <View>
        <Text>{text}</Text>
      </View>
    </TouchableOpacity>
  );

  _renderModalContent = () => (
    <View style={{ backgroundColor: "red" }}>
      <Text>Hello!</Text>
      {this._renderButton("Close", () =>
        this.setState({ visibleModal: false })
      )}
    </View>
  );

  _handleOnScroll = event => {
    this.setState({
      scrollOffset: event.nativeEvent.contentOffset.y
    });
  };

  _handleScrollTo = p => {
    if (this.scrollViewRef) {
      this.scrollViewRef.scrollTo(p);
    }
  };
  toogleModal = () => {
    this.setState({ visibleModal: !this.state.visibleModal });
  };

  _setEmail = props => {
    this.setState({ email: props });
  };
  _setPassword = props => {
    this.setState({ password: props });
  };
  _onLogin = props => {
    this.setState({ loginLoading: true });
    _login(["POST", this.state.email, this.state.password])
      .then(response => response.json())
      .then(
        res =>
          this.setState({
            token: res.token.token,
            loginLoading: false,
            visibleModal: false,
            snackbar: true
          }),
        this._fireSnackbarTimeoutandSaveToken()
      )
      .catch(error => console.error(error));
  };

  onLogout = async () => {
    await AsyncStorage.removeItem("token");
    this.setState({ showLogin: true });
  };

  _fireSnackbarTimeoutandSaveToken = async () => {
    setTimeout(() => this.setState({ snackbar: false }), 1000 * 3);
    await AsyncStorage.setItem("token", this.state.token);
    const token = await AsyncStorage.getItem("token");
    console.log(token);
  };

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
                color: "#d0eaff",
                alignSelf: "flex-start",
                paddingStart: 5,
                paddingEnd: 5
              }}
            >
              Success
            </Text>
          </View>
        </View>
      </Modal>
    );
  };

  _renderSideMenu = () => {
    return (
      <SideDrawerMenu
        modalVisible={this.state.showMenu}
        closeMenu={this._toogleMenu}
      />
    );
  };
  _toogleMenu = () => {
    this.setState({ showMenu: false });
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        {this._renderSideMenu()}
        <Header
          onLogin={this.toogleModal}
          showLogin={this.state.showLogin}
          user={this.state.user}
          onLogout={this.onLogout}
          onMenu={() => this.setState({ showMenu: true })}
        />
        {this._showLoginSuccess()}
        <LoginModal
          visibleModal={this.state.visibleModal}
          hideModal={this.toogleModal}
          setEmail={this._setEmail}
          setPassword={this._setPassword}
          email={this.state.email}
          password={this.state.password}
          onLogin={this._onLogin}
          loading={this.state.loginLoading}
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
                <TouchableOpacity>
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
              ) : (
                <FlatList
                  style={{
                    alignSelf: "center",
                    width:
                      Dimensions.get("window").width > 720 ? "90%" : "100%",
                    marginTop: 10
                  }}
                  data={this.state.posts}
                  renderItem={({ item }) => this._renderPosts(item)}
                  keyExtractor={(item, index) => index.toString()}
                ></FlatList>
              )}
            </View>
            <View style={{ width: "35%" }}>
              <View
                style={{
                  width: "100%",
                  height: 100,
                  backgroundColor: "#fff",
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
                    justifyContent: "space-between"
                  }}
                >
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "400",
                      margin: 15,
                      fontFamily: "BlinkMacSystemFont"
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
                          margin: 15,
                          fontFamily: "BlinkMacSystemFont"
                        }}
                      >
                        View All
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

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
          borderRadius: 4
        }}
      >
        <Text style={{ fontSize: 26, alignSelf: "center", margin: 10 }}>
          Login
        </Text>
        <Seperator height={150} width="100%" />
        <TextInput
          textContentType="emailAddress"
          onChangeText={text => props.setEmail(text)}
          style={styles.textInputStyle}
          placeholder="Email"
          value={props.email}
        />
        <TextInput
          textContentType="password"
          onChangeText={text => props.setPassword(text)}
          secureTextEntry
          style={styles.textInputStyle}
          placeholder="Password"
          value={props.password}
        />
        <Seperator width="100%" height={10} />
        <TouchableOpacity
          onPress={() => props.onLogin()}
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
          alignSelf: "center"
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
            marginEnd: 20,
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
        <Text style={{ fontSize: 12, fontStyle: "italic", marginBottom: 2 }}>
          {" "}
          Author
          <Text style={{ fontSize: 14, fontStyle: "normal" }}>
            {" "}
            {props.author[0]} {" , "} {props.author[1]}{" "}
          </Text>{" "}
        </Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Icon name="forum" size={20} color="#000" />
        <Text style={{ fontSize: 14, alignSelf: "center", marginStart: 5 }}>
          {props.comments}
        </Text>
      </View>
    </View>
  );
};

let hotWrapper = () => () => Posts;
if (Platform.OS === "web") {
  const { hot } = require("react-hot-loader");
  hotWrapper = hot;
}
export default hotWrapper(module)(Posts);

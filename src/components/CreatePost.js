import React from "react";
import {
  TextInput,
  View,
  Text,
  TouchableOpacity,
  FlatList
} from "react-native";
import Modal from "modal-enhanced-react-native-web";
import { styles } from "../styles";
import { Icon } from "../icons";

export const CreatePost = props => {
  return (
    <Modal
      isVisible={props.modalVisible}
      onBackdropPress={() => props.toggleModals({ id: 0 })}
      style={{
        margin: 0,
        width: "100%",
        borderRadius: 10
      }}
      backdropOpacity={0.3}
    >
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          padding: 20,
          borderRadius: 5
        }}
      >
        <View
          style={{
            width: "75%",
            height: "100%",
            backgroundColor: "#fff",
            alignSelf: "center",
            padding: 20,
            borderRadius: 5
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <Text
              style={{
                alignSelf: "center",
                fontSize: 24,
                fontWeight: "600",
                margin: 10
              }}
            >
              Create a post
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center"
              }}
            >
              <TouchableOpacity
                style={{ marginEnd: 20 }}
                onPress={() => props._toggleCategories()}
              >
                <View>
                  <Text style={{ fontSize: 16 }}>
                    {props.selectedCategory
                      ? props.showCategories
                        ? "Select Category"
                        : "Category : " + props.selectedCategory.name
                      : "Select Category"}
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    backgroundColor: "#39A3F7",
                    padding: 5,
                    borderRadius: 5
                  }}
                >
                  <Icon name="note-plus" size={24} color="#fff" />
                  <Text
                    style={{
                      marginStart: 5,
                      fontSize: 16,
                      color: "#fff",
                      fontWeight: "600"
                    }}
                  >
                    Save
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <TextInput
            placeholder="Title"
            textContentType="name"
            style={styles.createPostTitle}
            ref={input => (this.secondTextInput = input)}
          />
          <TextInput
            multiline
            placeholder="Content"
            style={styles.createPostContent}
          />
        </View>
        <CategoryModal
          showCategories={props.showCategories}
          categories={props.categories}
          selectedCategory={props.selectedCategory}
          setSelectedCategory={props.setSelectedCategory}
          toggleModals={props.toggleModals}
        />
      </View>
    </Modal>
  );
};

const CategoryModal = props => {
  console.log(props);
  let selected = null;
  return (
    <Modal
      isVisible={props.showCategories}
      onBackdropPress={() => props.toggleModals({ id: 1 })}
      backdropOpacity={0.3}
    >
      <View
        style={{
          width: "50%",
          alignSelf: "center",
          backgroundColor: "#fff",
          height: "70%",
          borderRadius: 5
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 20,
            marginStart: 20,
            marginEnd: 20,
            alignItems: "center",
            height: 50
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Text>Selected Category :</Text>
            <Text>
              {" "}
              {props.selectedCategory ? props.selectedCategory.name : null}
            </Text>
          </View>
          <View>
            {props.selectedCategory ? (
              <TouchableOpacity onPress={() => props.toggleModals({ id: 1 })}>
                <View
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 20,
                    backgroundColor: "#39A3F7",
                    justifyContent: "center"
                  }}
                >
                  <Icon
                    name="check"
                    color="#fff"
                    size={20}
                    style={{ alignSelf: "center" }}
                  />
                </View>
              </TouchableOpacity>
            ) : null}
          </View>
        </View>
        <FlatList
          style={{
            marginTop: 5,
            marginBottom: 30,
            marginStart: 30,
            marginEnd: 30
          }}
          data={props.categories}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => props.setSelectedCategory(item)}>
              {console.log(props.selected)}
              <View>
                <Text style={{ color: "#000", fontSize: 16 }}>
                  {" "}
                  {item.name}{" "}
                </Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(index, item) => index.toString()}
        />
        {selected != null ? (
          <TouchableOpacity style={{ alignSelf: "flex-end", margin: 20 }}>
            <View>
              <Icon name="account" size={30} color="#39A3F7" />
            </View>
          </TouchableOpacity>
        ) : null}
      </View>
    </Modal>
  );
};

import {
  getAllPost,
  login,
  me,
  categories,
  postByCategory,
  post,
  signup
} from "../consts";

export const _getAllPosts = async props => {
  return fetch(getAllPost);
};

export const _getAllCategories = async props => {
  return fetch(categories);
};

export const _login = async props => {
  const params = console.log(params);
  console.log(props[1]);
  return fetch(login, {
    method: props[0],
    body: JSON.stringify({
      email: props[1],
      password: props[2]
    }),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  });
};

export const _signup = async props => {
  console.log("mridx" + props + signup);
  return fetch(signup, {
    method: props[0],
    body: JSON.stringify({
      name: props[1],
      email: props[2],
      password: props[3]
    }),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  });
};

export const _getUser = async props => {
  return fetch(me, {
    method: "GET",
    headers: {
      Authorization: "Bearer " + props[0]
    }
  });
};

export const _logout = async props => {
  return null;
};

export const _postByCategory = async props => {
  return fetch(postByCategory + props);
};

export const _getPost = async props => {
  return fetch(post + props.id);
};

import { getAllPost, login, me } from "../consts";

export const _getAllPosts = async props => {
  return fetch(getAllPost);
};

export const _login = async props => {
  const params = console.log(params);
  console.log(props[1]);
  return fetch(login, {
    method: props[0],
    body: JSON.stringify({
      email: "mridulbaishya28@gmail.com",
      password: "mmxunite2"
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

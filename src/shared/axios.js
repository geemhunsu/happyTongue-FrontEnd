import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:4000/",
  headers: {
    "content-type": "application/json;charset=UTF-8",
    Accept: "application/json",
  },
});

export const apis = {
  getPost: () => instance.post("posts"),
  creatUser: (user) => instance.post("user", user),
  getOnePost: () => instance.get("posts"),
  getSearchPost: () => instance.get("posts?search={keyword}"),
  addComment : (comment) => instance.post("comments",comment),
};

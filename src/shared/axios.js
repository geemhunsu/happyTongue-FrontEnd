import axios from "axios";

const instance = axios.create({
  baseURL: "http://3.34.138.243",
  // baseURL: "http://localhost:4000/",
  headers: {
    "content-type": "application/json;charset=UTF-8",
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

export const apis = {
  getPost: () => instance.get("api/posts"), //전체 post 조회
  createUser: (user) => instance.post("user", user),
  createLogin: (user) => instance.post("login", user),
  checkLogin: (user) => instance.post("user", user),
  getOnePost: (post_id) => instance.get(`api/posts${post_id}`), // 상세페이지 조회
  editPost: (post_id, content) => instance.post(`/posts/:${post_id}`, content),
  getSearchPost: (keyword) => instance.get(`api/posts/search/${keyword}`), //검색 조회
  addComment: (comment) => instance.post("comments", comment), //댓글달기
};

import axios from "axios";

const instance = axios.create({
  baseURL: "http://3.34.138.243",
  // baseURL: "http://localhost:4000/",
  headers: {
    "content-type": "application/json;charset=UTF-8",
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
    timeout: 1000,
  },
});

instance.defaults.headers.common[
  "Authorization"
] = `Bearer ${localStorage.getItem("MY_TOKEN")}`;

export const apis = {
  getPost: () => instance.get("api/posts"), //전체 post 조회
  createPost: (post) => instance.post("api/posts", post),
  createUser: (user) => instance.post("api/users/signup", user),
  createLogin: (user) => instance.post("api/users/auth", user),
  checkLogin: (user) => instance.post("user", user),
  getUserInfo: () => instance.get("api/users/me"),
  getOnePost: (post_id) => instance.get(`api/posts/${post_id}`), // 상세페이지 조회
  deletePost: (post_id) => instance.delete(`api/posts/${post_id}`), // post 삭제
  editPost: (post_id, content) => instance.post(`/posts/:${post_id}`, content),
  getSearchPost: (keyword) => instance.get(`api/posts/search/${keyword}`), //검색 조회
  addComment: (post_id, comment) =>
    instance.post(`api/posts/${post_id}/comments`, comment), //댓글달기
  getComment: (post_id) => instance.get(`api/posts/${post_id}/comments`), //댓글 조회
};

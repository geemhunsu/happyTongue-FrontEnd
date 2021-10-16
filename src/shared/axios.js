import axios from "axios";

export const instance = axios.create({
  // baseURL: "http://3.34.138.243",
  baseURL: "http://15.164.225.3",
  // baseURL: "http://localhost:4000/",
  headers: {
    "content-type": "application/json;charset=UTF-8",
    Accept: "application/json, text/plain,*/*",
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
  getUserInfo: () => instance.get("api/users/me"),
  getOnePost: (post_id) => instance.get(`api/posts/${post_id}`), // 상세페이지 조회
  deletePost: (post_id) => instance.delete(`api/posts/${post_id}`), // post 삭제
  editPost: (post_id, post) => instance.patch(`api/posts/${post_id}`, post),
  getSearchPost: (keyword) => instance.get(`api/posts/search/${keyword}`), //검색 조회
  addComment: (post_id, content) =>
    instance.post(`api/posts/${post_id}/comments`, content), //댓글달기
  getComment: (post_id) => instance.get(`api/posts/${post_id}/comments`), //댓글 조회
  deleteComment: (post_id, comment_id) => instance.delete(`api/posts/${post_id}/comments/${comment_id}`), //댓글 삭제
  editComment : (post_id, comment_id, content) => {
    instance.patch(`api/posts/${post_id}/comments/${comment_id}`,content)},
  getMyPost: () => instance.get("api/posts/myinfo"), // 내 게시물 조회
  getBookMark: () => instance.get("api/posts/dibson"), // 즐겨찾기 조회
  likePost: (post_id, likeState) => instance.post(`api/posts/${post_id}`, likeState),
};

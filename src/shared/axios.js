import axios from "axios";

const instance = axios.create({
  baseURL: "http://3.34.138.243",
  // baseURL: "http://localhost:4000/",
  headers: {
    "content-type": "application/json;charset=UTF-8",
    Accept: "application/json",
    'Access-Control-Allow-Origin': '*',
  },
});

export const apis = {
  getPost: () => instance.get("api/posts"),   //전체 post 조회
  creatUser: (user) => instance.post("user", user),
  // getOnePost: () => instance.get('api/posts'),  // 상세페이지 조회
  getSearchPost: () => instance.get("posts?search={keyword}"),  //검색 조회
  addComment : (comment) => instance.post("comments",comment),  //댓글달기
  getComment : () => instance.get("comments"),  // 댓글 조회
};

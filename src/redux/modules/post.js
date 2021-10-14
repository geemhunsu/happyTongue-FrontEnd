import produce from "immer";
import React from "react";
import { createAction, handleActions } from "redux-actions";
import moment from "moment";
import { history } from "../ConfigureStore";
import { apis } from "../../shared/axios";
const GET_POST = "GET_POST";
const ADD_COMMENT = "ADD_COMMENT";
const GET_COMMENT = "GET_COMMENT";

// 액션 생성
const getPost = createAction(GET_POST, (post_list) => ({
  post_list,
}));

const getComment = createAction(GET_COMMENT, (comment_list) => ({
  comment_list,
}));

const initialState = {
  //  리듀서 데이터 초기값
  list: [],
  comment: [],
};

const getPostMW = () => {   // 전체페이지 조회
  return function (dispatch) {
    apis
      .getPost()
      .then((res) => {
        const post_list = res.data;
        dispatch(getPost(post_list));
      })
      .catch((err) => {
        console.error(err);
      });
  };
};




const getOnePostMW = () => {    // 상세페이지 조회
  return function (dispatch) {
    apis
      .getOnePost()
      .then((res) => {
        const post = res.data;
        console.log(post);
        dispatch(getPost(post));
      })
      .catch((err) => {
        console.error(err);
      });
  };
};

const getSearchPostMW = () => { // 검색 페이지 조회
  return function (dispatch) {
    apis
      .getSearchPost()
      .then((res) => {
        const post_list = res.data;
        dispatch(getPost(post_list));
      })
      .catch((err) => {
        console.err(err);
      });
  };
};

const addCommentMW = (comment) => { // 댓글 추가
  // 댓글달기
  return function (dispatch) {
    apis.addComment(comment).then(() => {});
  };
};

const getCommentMW = () => {
    return function (dispatch) {
        apis.getComment().then((res)=>{
            const comment_list = res.data;
            dispatch(getComment(comment_list));
        }).catch((err)=> {
            console.error(err);
        });
    }
}
export default handleActions(
  //리듀서
  {
    [GET_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.post_list;
      }),
    [GET_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.comment = action.payload.comment_list;
      }),
  },
  initialState
);

const actionCreators = {
  getPost,
  getComment,
  getPostMW,
  getOnePostMW,
  getSearchPostMW,
  addCommentMW,
  getCommentMW,
};

export { actionCreators };

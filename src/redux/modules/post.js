import produce from "immer";
import React from "react";
import { createAction, handleActions } from "redux-actions";
import moment from "moment";
import { history } from "../ConfigureStore";
import { apis } from "../../shared/axios";
import axios from "axios";

// 액션
const GET_POST = "GET_POST";
const CREATE_POST = "CREATE_POST";
const ADD_COMMENT = "ADD_COMMENT";
const GET_COMMENT = "GET_COMMENT";

// 액션 생성
const getPost = createAction(GET_POST, (post_list) => ({
  post_list,
}));
const createPost = createAction(CREATE_POST, (post) => ({ post }));

const initialState = {
  //  리듀서 데이터 초기값
  list: [],
};


// 미들웨어
const createPostMW = (post) => {
    return (dispatch, getState, {history}) => {
        const insert_dt = moment().format("YYYY-MM-DD hh:mm:ss");
        const _post = {...post, insert_dt, comment:[],}
        apis.createPost(_post).then(res => {            
            dispatch(createPost(_post));
            window.alert('게시글이 작성되었습니다!');
            history.replace("/");
        })
        .catch(err => {
            console.log(err);
        })
    }
}


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

// const getOnePostMW = (post_id) => {    // 상세페이지 조회
//   return function (dispatch) {
//     apis
//       .getOnePost()
//       .then((res) => {
//         const post = res.data;
//         dispatch(getPost(post));
//       })
//       .catch((err) => {
//         console.error(err);
//       });
//   };
// };

const getOnePostMW = (post_id) => {
  return function (dispatch) {
    axios.get(`http://3.34.138.243/api/posts/${post_id}`).then((res) => {
      const post = res.data;
      dispatch(getPost(post));
    });
  };
};

const getSearchPostMW = () => {
  // 검색 페이지 조회
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

const addCommentMW = (comment) => {
  // 댓글 추가
  // 댓글달기
  return function (dispatch) {
    apis.addComment(comment).then(() => {});
  };
};

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

      [CREATE_POST]: (state, action) =>
      produce(state, (draft)=> {
          draft.list.unshift(action.payload.post);
      }),
  },
  initialState
);

const actionCreators = {
  getPost,
  getPostMW,
  getOnePostMW,
  getSearchPostMW,
  addCommentMW,
  createPostMW,
};

export { actionCreators };

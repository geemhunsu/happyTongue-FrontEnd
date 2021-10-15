import produce from "immer";
import { createAction, handleActions } from "redux-actions";
import { apis } from "../../shared/axios";

import { actionCreators as imageActions } from "./image";

// 액션
const GET_POST = "GET_POST";
const CREATE_POST = "CREATE_POST";
const EDIT_POST = "EDIT_POST";

// 액션 생성
const getPost = createAction(GET_POST, (post_list) => ({
  post_list,
}));
const createPost = createAction(CREATE_POST, (post) => ({ post }));
const updatePost = createAction(EDIT_POST, (post_id, post) => ({post_id, post}));

const initialState = {
  //  리듀서 데이터 초기값
  list: [],
};

// 미들웨어

// 게시글 작성
const createPostMW = (post) => {
  console.log(post);
  return (dispatch, getState, { history }) => {
    apis
      .createPost(post)
      .then((res) => {
        dispatch(createPost(post));
        dispatch(imageActions.setPreview(null, null, null, null, null));
        window.alert("게시글이 작성되었습니다");
        history.replace("/");
      })
      .catch((err) => {
        dispatch(imageActions.setPreview(null, null, null, null, null));
        console.log(err);
        history.replace("/");
      });
  };
};

// 게시글 수정
const editPostMW = (post_id, post) => {
  console.log('리덕스 모듈 post.js 진입')
  return async function (dispatch, getState, {history}) {
    await apis .editPost(post_id, post);
    dispatch(imageActions.setPreview(null, null, null, null, null));    
    history.replace("/");      
  }
}

// 전체페이지 조회
const getPostMW = () => {
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

// 상세페이지 조회
const getOnePostMW = (post_id) => {
  return function (dispatch) {
    apis
      .getOnePost(post_id)
      .then((res) => {
        const post = res.data;
        dispatch(getPost(post));
      })
      .catch((err) => {
        console.error(err);
      });
  };
};

// 검색 페이지 조회
const getSearchPostMW = (keyword) => {
  return function (dispatch, getState, { history }) {
    apis
      .getSearchPost(keyword)
      .then((res) => {
        const post_list = res.data;
        dispatch(getPost(post_list));
        history.push("/");

      })
      .catch((err) => {
        console.error(err);
      });
  };
};

// post 삭제
const deletePostMW = (post_id) => {
  console.log(post_id);
  return function (dispatch, getState, { history }) {
    apis
      .deletePost(post_id)
      .then((res) => {
        apis
          .getPost()
          .then((res) => {
            dispatch(getPost(res.data));
            history.push("/");
          })
          .catch((err) => {
            console.error(err);
          });
      })
      .catch((err) => {
        console.error(err);
      });
  };
};



export default handleActions(
  //리듀서
  {
    [GET_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.post_list;
      }),
    [CREATE_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list.push(action.payload.post);
      }),
    [EDIT_POST]: (state, action) =>
      produce(state, (draft) => {
        let idx = draft.list.indexOf(p => p._id === action.payload.post_id);
        draft.list[idx] = {...draft.list[idx], ...action.payload.post};
      }),
  },
  initialState
);

const actionCreators = {
  getPost,
  getPostMW,
  getOnePostMW,
  getSearchPostMW,
  deletePostMW,
  editPostMW,
  createPostMW,
};

export { actionCreators };

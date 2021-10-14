import produce from "immer";
import { createAction, handleActions } from "redux-actions";
import { apis } from "../../shared/axios";

// 액션
const GET_POST = "GET_POST";
const CREATE_POST = "CREATE_POST";
const ADD_COMMENT = "ADD_COMMENT";
const GET_COMMENT = "GET_COMMENT";

// 액션 생성
const getPost = createAction(GET_POST, (post_list) => ({
  post_list,
}));
const addComment = createAction(ADD_COMMENT, (comment) => ({
  comment,
}));

const getComment = createAction(GET_COMMENT, (comments) => ({
  comments,
}))
const createPost = createAction(CREATE_POST, (post) => ({ post }));

const initialState = {
  //  리듀서 데이터 초기값
  list: [],
  comment:[],
};

// 미들웨어
const createPostMW = (post) => {
  return (dispatch, getState, { history }) => {        
    apis
      .createPost(post)
      .then((res) => {
        dispatch(createPost(post));
        window.alert(res.result);
        history.replace("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

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

// 댓글달기
const addCommentMW = (comment) => {
  return function (dispatch) {
    apis.addComment(comment).then(() => {
      dispatch(addComment(comment));
    });
  };
};

const getCommentMW = (post_id) => {
  return function(dispatch) {
    apis.getComment(post_id).then((res)=> {
      console.log(res.data);
      getComment(res.data);
    })
  }
}
export default handleActions(
  //리듀서
  {
    [GET_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.post_list;
      }),
    [ADD_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.comment.unshift(action.payload.comment);
      }),
    [GET_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.comment = action.payload.comments;
      }),
    [CREATE_POST]: (state, action) =>
      produce(state, (draft) => {
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
  deletePostMW,
  addCommentMW,
  createPostMW,
  getCommentMW,
};

export { actionCreators };

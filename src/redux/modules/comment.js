import produce from "immer";
import { createAction, handleActions } from "redux-actions";
import { apis } from "../../shared/axios";
import { instance } from "../../shared/axios";

const ADD_COMMENT = "ADD_COMMENT";
const GET_COMMENT = "GET_COMMENT";
const DELETE_COMMENT = "DELETE_COMMENT";

const initialState = {
  //  리듀서 데이터 초기값
  list: [{ content: "asd" }, { content: "ㅎㅇ" }],
};

const addComment = createAction(ADD_COMMENT, (comment) => ({
  comment,
}));

const getComment = createAction(GET_COMMENT, (comments) => ({
  comments,
}));
const deleteComment = createAction(DELETE_COMMENT, (comment_id) => ({
  comment_id,
}));
// 댓글달기
const addCommentMW = (post_id, content) => {
  console.log(content);
  return (dispatch) => {
    apis
      .addComment(post_id, content)
      .then((result) => {
        dispatch(addComment(content));
        console.log(content);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const getCommentMW = (post_id) => {
  return function (dispatch) {
    apis
      .getComment(post_id)
      .then((res) => {
        dispatch(getComment(res.data.detail));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const deleteCommentMW = (post_id, comment_id) => {
  return function (dispatch) {
    apis.deleteComment(post_id, comment_id).then((res) => {
      dispatch(deleteComment(post_id, comment_id));
    });
  };
};
export default handleActions(
  //리듀서
  {
    [ADD_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.list.unshift(action.payload.comment);
      }),
    [GET_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.comments;
      }),
    [DELETE_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        const delete_idx = draft.list.findIndex(
          (list) => list._id === action.payload.comment_id
        );
        console.log(draft.list[delete_idx]);
        draft.list.splice(delete_idx, 1);
      }),
  },
  initialState
);

const actionCreators = {
  addCommentMW,
  getCommentMW,
  deleteCommentMW,
};

export { actionCreators };

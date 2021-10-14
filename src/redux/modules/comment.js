import produce from "immer";
import { createAction, handleActions } from "redux-actions";
import { apis } from "../../shared/axios";
import { instance } from "../../shared/axios";

const ADD_COMMENT = "ADD_COMMENT";
const GET_COMMENT = "GET_COMMENT";



const initialState = {
  //  리듀서 데이터 초기값
  list: [{"content" : "asd"}, {"content":"ㅎㅇ"}],
};

const addComment = createAction(ADD_COMMENT, (comment) => ({
  comment,
}));

const getComment = createAction(GET_COMMENT, (comments) => ({
  comments,
}));

// 댓글달기
const addCommentMW = (post_id,content) => {
  console.log(content);
  return (dispatch) => {
    apis
      .addComment(post_id,content)
      .then((result) => {
        dispatch(addComment(content));
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const getCommentMW = (post_id) => {
  return function (dispatch) {
    apis.getComment(post_id).then((res) => {
      dispatch(getComment(res.data.detail));
    }).catch((err) =>{
      console.log(err);
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
        console.log(action);
        draft.list = action.payload.comments;
      }),
  },
  initialState
);

const actionCreators = {
  addCommentMW,
  getCommentMW,
};

export { actionCreators };

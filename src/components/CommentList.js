import React from "react";
import {useDispatch, useSelector} from "react-redux";
import { Grid } from "../elements/index";
import Comment from "../components/Comment";
import { actionCreators as commentActions } from "../redux/modules/comment";
const CommentList = (props) => {
  const comment = useSelector((state)=> state.comment.list);
  // comment_list가 없으면 return  
  if (!comment) {
    return <div></div>;
  }
  
  // comment_list 길이만큼 반복
  return (
    <Grid width="60%" margin="auto" padding="16px">
      {comment.map((c, index) => {
        return (
          // is_even 짝수 홀수 댓글색 다르게
          <Grid width="auto" key={c.content+index} >
            <Comment {...c} is_even={index % 2 === 0 ? true : false} />
          </Grid>
        );
      })}
    </Grid>
  );
};
export default CommentList;

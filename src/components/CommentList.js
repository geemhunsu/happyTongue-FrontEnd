import React from "react";
import { Grid } from "../elements/index";
import Comment from "../components/Comment";
const CommentList = (props) => {
  let comment = props.comment;
  console.log(comment);
  // comment_list가 없으면 return
  if (!comment_list) {
    return;
  }

  // comment_list 길이만큼 반복
  return (
    <Grid width="60%" margin="auto" padding="16px">
      {comment.map((c, index) => {
        return (
          // is_even 짝수 홀수 댓글색 다르게
          <Grid width="auto" key={c.id}>
            <Comment {...c} is_even={index % 2 === 0 ? true : false} />
          </Grid>
        );
      })}
    </Grid>
  );
};
const comment_list = [1, 2, 3];
export default CommentList;

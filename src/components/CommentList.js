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
        if (index % 2 === 0) {
          return (
            <Grid width="auto" key={c.id}>  {/* 짝수일 때*/}
              <Comment {...c} is_even/>
            </Grid>
          );
        } else {
          return (
            <Grid width="auto" key={c.id}>  {/* 홀수일 때*/}
              <Comment {...c} />
            </Grid>
          );
        }
      })}
    </Grid>
  );
};
const comment_list = [1, 2, 3];
export default CommentList;

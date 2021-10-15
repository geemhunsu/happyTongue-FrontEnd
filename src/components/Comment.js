import React from "react";
import { useDispatch, useSelector } from "react-redux"; 
import { Grid, Text, Image, Button } from "../elements";
import {actionCreators as commentActions} from "../redux/modules/comment";
import Time from "../shared/Time";
const Comment = (props) => {
  const dispatch = useDispatch();
  const post_id = props.post_id;
  const { nickname, content, date, is_even, _id } = props;
  const user = useSelector(state => state.user.user.nickname);
  if (!props || !date) {
    return <div></div>;
  }
  const deleteComment =  () => {
    dispatch(commentActions.deleteCommentMW(post_id,_id));
  }
  return (
    <React.Fragment>
      {/* 댓글 구분을 위해 줄 바뀔때 색 변경*/}
      <Grid flex="space-between" bg={is_even ? "#eeeeee" : null}>
        <Grid flex="center" width="20%">
          {/* <Image
              src={user_profile}
              size="30"
              margin="0px 5px 0px 0px"
              shape="circle"
            /> */}
          <Text>{nickname}</Text>
        </Grid>
        <Grid width="50%">
          <Text>{content}</Text>
        </Grid>
        <Grid width="10%" flex="center">
          <Text>{Time(date)}</Text>
        </Grid>
        <Grid width="20%" flex="space-between">
        {user === nickname ? 
        <>
          <Button
            text="수정"
            btn_color={is_even ? "#eeeeee" : "white"}
            font_color="black"
            border="none"
            hover_font="red"
          />
          <Button
            text="삭제"
            btn_color={is_even ? "#eeeeee" : "white"}
            font_color="black"
            border="none"
            hover_font="red"
            _onClick = {deleteComment}
          />
          </>
         :null}
         </Grid>
        
      </Grid>
    </React.Fragment>
  );
};

Comment.defaultProps = {
  nickname: "",
  content: "",
  is_even: false,
};
export default Comment;

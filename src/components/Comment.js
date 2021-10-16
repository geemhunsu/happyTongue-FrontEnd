import React from "react";
import { useDispatch, useSelector } from "react-redux"; 
import { Grid, Text, Input, Button } from "../elements";
import {actionCreators as commentActions} from "../redux/modules/comment";
import Time from "../shared/Time";
const Comment = (props) => {
  const dispatch = useDispatch();
  const post_id = props.post_id;
  const { nickname, content, date, is_even, _id } = props;
  const user = useSelector(state => state.user.user.nickname);
  const [content_text, setText] = React.useState(content);
  const [origin_text, setOriginText] = React.useState(content);
  const [display,setDisplay] = React.useState("none");

  if (!props || !date) {
    return <div></div>;
  }
  const deleteComment =  () => {
    dispatch(commentActions.deleteCommentMW(post_id,_id));
  }

  const editComment = () => {
    dispatch(commentActions.editCommentMW(post_id, _id, content_text));
    setOriginText(content_text);
    
    // window.location.reload();
    setDisplay("none");
  }
  
  const toggleEdit = () => {
    if(display === "none") {
      setDisplay("flex");
    }else {
      setDisplay("none");
    }
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
          <Text>{origin_text}</Text>
          
        </Grid>
        <Grid width="10%" flex="center">
          <Text>{Time(date)}</Text>
        </Grid>
        <Grid width="20%" flex="space-between">
        { user === nickname ? 
        <>
          <Button
            text="수정"
            btn_color={is_even ? "#eeeeee" : "white"}
            font_color="black"
            border="none"
            hover_font="red"
            _onClick = {toggleEdit}
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
      <Grid display = {display}>
        <Input value = {content_text} _onChange={(e) => {
          setText(e.target.value);
        }}></Input>
        <Button text = "수정완료" _onClick = {editComment} width = "20%"/>
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

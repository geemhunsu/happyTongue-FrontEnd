import React from 'react';
import { Grid, Input, Button } from "../elements/index";
import { actionCreators as postActions } from "../redux/modules/post";
import { useDispatch, useSelector } from "react-redux";
const CommentWrite = (props) => {
    const dispatch = useDispatch();
    const [comment_text, setCommentText] = React.useState('');
    const onChange = (e) => {
        setCommentText(e.target.value);
    }
    const write = () => {
        dispatch(postActions.addCommentMW({comment : comment_text, nickname : "만준"}));
        console.log(comment_text);
        setCommentText("");
    }
    return (
      <React.Fragment>
          <Grid width ="60%" flex margin="auto" padding="16px">
              <Input onSubmit={write} _onChange={onChange} height="20px" value = {comment_text}></Input>
              <Button _onClick={write} text="입력" width="10%"/>
          </Grid>
      </React.Fragment>  
    );
};

export default CommentWrite;
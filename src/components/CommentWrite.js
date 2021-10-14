import React from 'react';
import { Grid, Input, Button } from "../elements/index";
import { actionCreators as commentActions } from "../redux/modules/comment";
import { useDispatch, useSelector } from "react-redux";
const CommentWrite = (props) => {
    const dispatch = useDispatch();
    const [content, setContent] = React.useState('');
    const onChange = (e) => {
        setContent(e.target.value);
    }
    const write = () => {
        dispatch(commentActions.addCommentMW(props.post_id,{content}));
        setContent("");
    }
    return (
      <React.Fragment>
          <Grid width ="60%" flex margin="auto" padding="16px">
              <Input onSubmit={write} _onChange={onChange} height="20px" value = {content}></Input>
              <Button _onClick={write} text="입력" width="10%"/>
          </Grid>
      </React.Fragment>  
    );
};

export default CommentWrite;
import React from "react";
import { Grid, Text, Image } from "../elements";
const Comment = (props) => {
    const {user_profile, user_id, content, time } = props;
  return (
    <React.Fragment>
      <Grid flex="space-between">
        <Grid flex width="30%">
            <Image src={user_profile} size ="30" margin ="0px 5px 0px 0px" shape = "circle"/>
            <Text>{user_id}</Text>
        </Grid>
        <Text>{content}</Text>
        <Text>{time}</Text>
      </Grid>
    </React.Fragment>
  );
};

Comment.defaultProps = {
    user_profile : "https://mblogthumb-phinf.pstatic.net/20140830_73/hkjwow_1409374816444cxF8E_JPEG/%B0%DF%BA%F3_%281%29.jpg?type=w2",
    user_id : "만준",
    content : "굳",
    time : "50분전",
}
export default Comment;

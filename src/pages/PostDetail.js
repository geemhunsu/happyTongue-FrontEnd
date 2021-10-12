import React from "react";
import CommentList from "../components/CommentList";
import CommentWrite from "../components/CommentWrite";
import Search from "../components/Search";
import { Grid, Image, Text, Button } from "../elements/index";
const PostDetail = (props) => {
  return (
    <React.Fragment>
      <Grid>
        <Search />
        <Grid padding="16px">   {/*이미지 Grid*/}
          
          <Image shape="rectangle" margin="auto" width="60%" height="400px" />
        </Grid>
        <Grid margin="auto" width="60%" padding="16px"> {/*컨텐츠 Grid*/}
          <Grid>
            <Text align="center" bold>{props.title}</Text>
          </Grid>
          <Grid border="solid 1px" height="300px">
            <Text>{props.content}</Text>
          </Grid>
          <Grid flex>
              <Button text="수정하기"/>
              <Button text="삭제하기"/>
          </Grid>
        </Grid>
        <CommentWrite/>    {/*댓글 입력 component*/}
        <CommentList />     {/*댓글 리스트 component*/}
      </Grid>
    </React.Fragment>
  );
};
PostDetail.defaultProps = {
  title: "타이틀",
  content: "글 내용!skjdfhsjkfhjksdfhjksdhjfjksahdfjksdhjkfhsdjkfhsjkdfjksdhfjkshdjkfhsdjkfhjksdhfkjsdhfjkshdjkfshdjkf",   //text word-break : break-all;
};
export default PostDetail;

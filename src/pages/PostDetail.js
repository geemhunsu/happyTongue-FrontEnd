import React from "react";
import CommentList from "../components/CommentList";
import CommentWrite from "../components/CommentWrite";
import Search from "../components/Search";
import { Grid, Image, Text, Button } from "../elements/index";
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { yellow , red} from '@mui/material/colors';
const PostDetail = (props) => {
  const [is_like, setIsLike] = React.useState(false);
  const [is_favorite, setIsFavorite] = React.useState(false);

  const like =() => {
    if(is_like ) {
      setIsLike(false);
    }
    else {
      setIsLike(true);
    }
  }
  const favorite =() => {
    if(is_favorite) {
      setIsFavorite(false);
    }
    else {
      setIsFavorite(true);
    }
  }
  return (
    <React.Fragment>
      <Grid>
        <Search />
        <Grid padding="16px">   {/*이미지 Grid*/}
        <Text align="center">{props.live_count}명이 보고있다.</Text>
          <Image shape="rectangle" margin="auto" width="60%" height="400px"/>
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
        <Grid flex = "space-between" margin = "auto" width = "60%">
          <Grid>
            <Text>댓글: {props.comment_count}개</Text>
          </Grid>
          <Grid width = "10%">
            {is_like === true? <FavoriteIcon sx={{ color: red[500] }} onClick = {like}/> : <FavoriteBorderIcon sx={{ color: red[500] }} onClick = {like}/>}
            {is_favorite === true? <StarIcon sx={{ color: yellow[500] }} onClick = {favorite}/> : <StarBorderIcon sx={{ color: yellow[500] }} onClick = {favorite}/>}
            
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
  live_count : 0,
  comment_count:0,
};
export default PostDetail;

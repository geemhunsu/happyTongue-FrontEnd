import React from "react";
import moment from "moment";
import CommentList from "../components/CommentList";
import CommentWrite from "../components/CommentWrite";
import Search from "../components/Search";
import { Grid, Image, Text, Button } from "../elements/index";
import { useDispatch, useSelector } from "react-redux";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { yellow, red } from "@mui/material/colors";
import { actionCreators as postActions } from "../redux/modules/post";
import { actionCreators as commentActions } from "../redux/modules/comment";

const PostDetail = (props) => {
  const dispatch = useDispatch();

  const [is_like, setIsLike] = React.useState(false);
  const [is_favorite, setIsFavorite] = React.useState(false);
  const post = useSelector((state) => state.post.list.detail);
  const user = useSelector((state) => state.user.user);

  const comment = useSelector((state) => state.comment.list);
  const _id = props.match.params.id;

  // const post_idx =post_list &&  post_list.findIndex((p) => p.id === _id);
  // const post = post_list[post_idx];

  const like = () => {
    if (is_like) {
      setIsLike(false);
    } else {
      setIsLike(true);
    }
  };
  const favorite = () => {
    if (is_favorite) {
      setIsFavorite(false);
    } else {
      setIsFavorite(true);
    }
  };
  const deletePost = () => {
    dispatch(postActions.deletePostMW(_id));
  };
  React.useEffect(() => {
    dispatch(postActions.getOnePostMW(_id));
    dispatch(commentActions.getCommentMW(_id));
  }, []);

  if (!post || !user) {
    return <div></div>;
  }
  // 게시물 작성시간
  const post_date = moment(post.date).format("YYYY-MM-DD");  //post가 존재할때 실행되야 해서 밑에다 넣음.
  
  return (
    <React.Fragment>
      <Grid>
        <Search />
        <Grid padding="16px">
          {/*이미지 Grid*/}
          <Grid margin="auto" flex="space-between" width = "50%">
            <Text>작성자 : {post.nickname} </Text>
            <Text align="center">{props.live_count}명이 보고있다.</Text>
            <Text>작성일 : {post_date}</Text>
          </Grid>
          {/*이미지*/}
          <Image
            shape="rectangle"
            margin="auto"
            width="50%"
            height="860px"
            src={post.imgUrl ? post.imgUrl : ""}
          />
        </Grid>
        <Grid margin="auto" width="60%" padding="16px">
          {/*컨텐츠 Grid*/}
          <Grid>
            <Text align="center" bold>
              {post.title} {/*글 제목*/}
            </Text>
          </Grid>
          <Grid border="solid 1px" height="300px">
            <Text>{post.content}</Text> {/*글 내용*/}
          </Grid>
          {post.nickname === user.nickname && (
            <Grid flex>
              <Button text="수정하기" width="50%"/> {/*수정 버튼*/}
              <Button text="삭제하기" width="50%" _onClick={deletePost} /> {/*삭제 버튼*/}
            </Grid>
          )}
        </Grid>
        <Grid flex="space-between" margin="auto" width="60%">
          <Grid>
            <Text>댓글: {comment.length}개</Text> {/*댓글갯수*/}
          </Grid>
          <Grid width="10%">
            {is_like === true ? ( // 하트
              <FavoriteIcon sx={{ color: red[500] }} onClick={like} />
            ) : (
              <FavoriteBorderIcon sx={{ color: red[500] }} onClick={like} />
            )}
            {is_favorite === true ? ( // 별
              <StarIcon sx={{ color: yellow[500] }} onClick={favorite} />
            ) : (
              <StarBorderIcon sx={{ color: yellow[500] }} onClick={favorite} />
            )}
          </Grid>
        </Grid>
        <CommentWrite post_id={_id} /> {/*댓글 입력 component*/}
        <CommentList post_id={_id} /> {/*댓글 리스트 component*/}
      </Grid>
    </React.Fragment>
  );
};
// PostDetail.defaultProps = {
//   title: "타이틀",
//   content:
//     "글 내용!skjdfhsjkfhjksdfhjksdhjfjksahdfjksdhjkfhsdjkfhsjkdfjksdhfjkshdjkfhsdjkfhjksdhfkjsdhfjkshdjkfshdjkf", //text word-break : break-all;
//   live_count: 0,
//   comment_count: 0,
// };
export default PostDetail;

import React from "react";
import moment from "moment";
import CommentList from "../components/CommentList";
import CommentWrite from "../components/CommentWrite";
import Search from "../components/Search";
import { Grid, Image, Text, Button } from "../elements/index";
import { useDispatch, useSelector } from "react-redux";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { red } from "@mui/material/colors";
import { actionCreators as postActions } from "../redux/modules/post";
import { actionCreators as commentActions } from "../redux/modules/comment";

const PostDetail = (props) => {
  const dispatch = useDispatch();
  const { history } = props;
  const post = useSelector((state) => state.post.list.detail);
  const user = useSelector((state) => state.user.user);
  
  const _like = useSelector((state) => state.post.list);
  const comment = useSelector((state) => state.comment.list);
  const _id = props.match.params.id;

  let is_like = _like.likeState; // bool
  let likes = _like.likes; // number type
  const like = () => {
    if ( is_like) { 
      likes=likes--;
    } else {
      likes=likes++;
    }
    dispatch(postActions.likeStateMW(_id, !is_like,likes));
  };

  const deletePost = () => {
    dispatch(postActions.deletePostMW(_id));
  };
  React.useEffect(() => {
    dispatch(postActions.getOnePostMW(_id));
    dispatch(commentActions.getCommentMW(_id));
  }, [is_like]);

  if (!post || !user) {
    return <div></div>;
  }

  // 게시물 작성시간
  const post_date = moment(post.date).format("YYYY-MM-DD"); //post가 존재할때 실행되야 해서 밑에다 넣음.

  return (
    <React.Fragment>
      <Grid>
        <Search />
        <Grid padding="16px">
          {/*이미지 Grid*/}
          <Grid margin="auto" flex="space-between" width="50%">
            <Text>작성자 : {post.nickname} </Text>
            <Text>작성일 : {post_date}</Text>
          </Grid>
          {/*이미지*/}
          <Image
            shape="rectangle"
            border="5px solid black"
            border_radius="7px"
            padding="7px"
            width="50%"
            height="500px"
            is_center
            margin="0 auto"
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
              <Button
                text="수정하기"
                _onClick={() => {
                  history.push(`/write/${_id}`);
                }}
              />{" "}
              {/*수정 버튼*/}
              <Button text="삭제하기" _onClick={deletePost} /> {/*삭제 버튼*/}
            </Grid>
          )}
        </Grid>
        <Grid flex="space-between" margin="auto" width="60%">
          <Grid>
            <Text>댓글: {comment.length}개</Text> {/*댓글갯수*/}
          </Grid>
          <Grid width="17%" flex = "space-between">
            <Text>좋아요 : {likes}</Text>
            {is_like === true ? ( // 하트
              <FavoriteIcon sx={{ color: red[500] }} onClick={like} />
            ) : (
              <FavoriteBorderIcon sx={{ color: red[500] }} onClick={like} />
            )}
          </Grid>
        </Grid>
        <CommentWrite post_id={_id} nickname={post.nickname} />{" "}
        {/*댓글 입력 component*/}
        <CommentList post_id={_id} /> {/*댓글 리스트 component*/}
      </Grid>
    </React.Fragment>
  );
};

export default PostDetail;

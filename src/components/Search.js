import React from "react";
import { actionCreators as postActions } from "../redux/modules/post";
import { Grid, Button, Input } from "../elements/index";
import { useDispatch } from "react-redux";

const Search = (props) => {
  const dispatch = useDispatch();
  const [search_text, setSearchText] = React.useState("");
  const onChange = (e) => {
    setSearchText(e.target.value);
  };
  const write = () => {
    dispatch(postActions.getSearchPostMW(search_text));
  };
  return (
    <Grid
      flex
      width="80%"
      height="50px"
      border="2px solid #FDCD56"
      margin="auto"
      padding="0px"
    >
      <Input
        size="20px"
        padding="0px 12px"
        placeholder="검색어를 입력해주세요."
        _onChange={onChange}
        value={search_text}
        onSubmit={write}
        border="none"
        outline="none"
        height="100%"
      />
      <Button
        bold
        text="검색"
        text_size="20px"
        height="50px"
        width="23%"
        margin="0px"
        border_radius="3px"
        btn_color="#FDCD56"
        border="none"
        _onClick={write}
      />
    </Grid>
  );
};

export default Search;

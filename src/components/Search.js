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
      border="1px solid lightgray"
      margin="auto"
      padding="3px"
    >
      <Input
        padding="5px"
        placeholder="검색어를 입력해주세요."
        _onChange={onChange}
        value={search_text}
        onSubmit={write}
        border="none"
        outline="none"
        size="18px"
      />
      <Button
        text="검색"
        text_size="20px"
        padding="8px 0px"
        width="23%"
        border_radius="3px"
        btn_color="#FDCD56"
        border="none"
        _onClick={write}
      />
    </Grid>
  );
};

export default Search;

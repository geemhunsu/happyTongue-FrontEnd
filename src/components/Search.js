import React from "react";
import { actionCreators as postActions } from "../redux/modules/post";

import { Grid, Button, Input } from "../elements/index";
import { useDispatch } from "react-redux";

const Search = (props) => {
  const dispatch = useDispatch();
  const [search_text, setSearchText] = React.useState("");
  const onChange = (e) => {
    setSearchText(e.target.value);
  }
  const write = () => {
    dispatch(postActions.getSearchPostMW(search_text));
  }
  return (
    <Grid flex width="80%" margin="auto" padding="16px">
      <Input padding="15px" placeholder="검색어를 입력해주세요." _onChange={onChange} value={search_text} onSubmit={write}/>
      <Button
        padding="15px"
        width="20%"
        border_radius="0px 10px 10px 0px"
        btn_color="#FF9696"
        color="#FEFFBD"
        border="none"
        _onClick={write}
      />
    </Grid>
  );
};

export default Search;

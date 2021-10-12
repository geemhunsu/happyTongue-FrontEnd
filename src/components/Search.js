import React from "react";
import { Grid, Button, Input } from "../elements/index";
const Search = (props) => {
  return (
    <Grid flex width="80%" margin="auto" padding="16px">
      <Input padding="15px" />
      <Button
        padding="15px"
        width="20%"
        border_radius="0px 10px 10px 0px"
        btn_color="#FF9696"
        color="#FEFFBD"
        border="none"
      />
    </Grid>
  );
};

export default Search;

import React from 'react';
import Logo from "../happytonguelogo.png"
import { Grid, Button, Text, Image } from '../elements';

const Header = (props) => {
    return (
        <React.Fragment>
            <Grid padding="1em" flex="space-between" width="100%" bg="rgba(254, 255, 189, 0.34)">
                <Grid width="auto">
                    <Image src={Logo} shape="rectangle" size="70" />
                </Grid>
                <Grid width="25%">
                    <Grid flex margin="0 0 5px 0">
                        <Button
                            text="내 정보"
                            padding="15px 10px"
                            font_color="#FEFFBD"
                            btn_color="#FF9696"
                            border="none"
                            margin="0 10px 0 0"
                            border_radius="10px"
                            ></Button>
                        <Button
                            text="로그아웃"
                            padding="15px 10px"
                            font_color="#FEFFBD"
                            btn_color="#FF9696"
                            border="none"
                            border_radius="10px"
                            ></Button>
                    </Grid>
                    <Grid flex>
                        <Button
                            text="로그인"
                            padding="15px 10px"
                            font_color="#FEFFBD"
                            btn_color="#FF9696"
                            border="none"
                            margin="0 10px 0 0"
                            border_radius="10px"
                            ></Button>
                        <Button
                            text="회원가입"
                            padding="15px 10px"
                            font_color="#FEFFBD"
                            btn_color="#FF9696"
                            border="none"
                            border_radius="10px"
                            ></Button>
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default Header;
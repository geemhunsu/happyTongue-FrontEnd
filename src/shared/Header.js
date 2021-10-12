import React from 'react';
import Logo from "../happytonguelogo.png"
import { Grid, Button, Text, Image } from '../elements';

const Header = (props) => {
    return (
        <React.Fragment>
            <Grid padding="1em" flex="space-between" width="100%">
                <Grid width="auto">
                    <Image src={Logo} shape="rectangle" size="70"/>
                </Grid>
                <Grid width="25%">
                    <Grid flex>
                        <Button text="내 정보" ></Button>
                        <Button text="로그아웃" ></Button>
                    </Grid>
                    <Grid flex>
                        <Button text="로그인" ></Button>
                        <Button text="회원가입" ></Button>
                    </Grid>
                </Grid>                
            </Grid>
        </React.Fragment>
    );
};

export default Header;
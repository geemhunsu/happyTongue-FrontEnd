import React from 'react';
import Upload from '../components/Upload';
import { Grid, Image, Text, Button, Input, SelectBox } from '../elements';

const PostWrite = (props) => {
    return (
        <React.Fragment>
            <Grid width="60%" margin="0 auto" flex_direction="column" flex>
                <Text family="GowunDodum-Regular" bold >미리보기</Text>
                <Image shape="rectangle" 
                width="50%" height="500px" is_center margin="0 0 50px 0"/>

                <Grid width="60%">
                    <Grid flex="space-between">
                        <Text family="GowunDodum-Regular" bold>가게 이름 :</Text>
                        <Input width="50%" padding="5px 1em" />
                    </Grid>
                    <Grid flex="space-between" width="100%">
                        <Text family="GowunDodum-Regular" bold>지역</Text>
                        <SelectBox padding="10px 1em" width="150px">
                            <option selected>지역 선택</option>
                            <option>서울</option>
                            <option>경기</option>
                            <option>강원</option>
                            <option>전남</option>
                            <option>전북</option>
                            <option>경남</option>
                            <option>경북</option>                            
                            <option>인천</option>                            
                        </SelectBox>
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};


export default PostWrite;
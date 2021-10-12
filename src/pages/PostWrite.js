import React from 'react';
import Upload from '../components/Upload';
import { Grid, Image, Text, Button, Input, SelectBox } from '../elements';

const PostWrite = (props) => {
    return (
        <React.Fragment>
            <Grid width="60%" padding="0 0 50px 0" margin="0 auto" flex_direction="column" flex>
                <Text family="GowunDodum-Regular" bold >미리보기</Text>
                <Image shape="rectangle" border="5px solid black" border_radius="7px" padding="7px"
                width="50%" height="500px" is_center margin="0 0 20px 0" />
                <Upload/>
                <Grid width="60%" margin="50px 0 0 0">
                    <Grid flex="space-between">
                        <Text family="GowunDodum-Regular" bold>가게 이름 :</Text>
                        <Input width="50%" padding="5px 1em" 
                        border="2px solid #F18C8E" radius="7px"/>
                    </Grid>
                    <Grid flex="space-between" width="100%"  margin="0 0 40px ">
                        <Text family="GowunDodum-Regular" bold>지역 :</Text>
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
                    <Text family="GowunDodum-Regular" bold margin="0 0 10px 0">후기 작성</Text>
                    <Input multline height="200px" margin="0 0 50px 0"
                    border="2px solid #F18C8E" radius="7px"/>
                    <Button text="작성하기" width="100%" padding="10px"
                    border="none" border_radius="7px"></Button>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};


export default PostWrite;
import React from 'react';
import Upload from '../components/Upload';
import { Grid, Image, Text, Button, Input, SelectBox } from '../elements';

const PostWrite = (props) => {
    return (
        <React.Fragment>
            <Grid width="60%" margin="0 auto" flex_direction="column" flex>
                <Text family="GowunDodum-Regular" bold >미리보기</Text>
                <Image shape="rectangle" width="50%" height="500px" is_center />

                <Grid>
                    <Grid flex="space-between">
                        <Text family="GowunDodum-Regular" bold>가게 이름 :</Text>
                        <Input width="50%" padding="5px 1em" />
                    </Grid>
                    <Grid flex="space-between" width="100%">
                        <Text>지역</Text>
                        <SelectBox />
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};


export default PostWrite;
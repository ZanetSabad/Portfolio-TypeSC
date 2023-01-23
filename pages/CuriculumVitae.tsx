// react
import * as React from 'react';
import { Typography } from '@mui/material';
import CustomAppBar from '../components/common/CustomAppBar';
import CenterBox from '../components/common/CenterBox';

const CuriculumVitae = () => {
    return(
        <>
        <CenterBox flexDirection='column'>
            <Typography align='center'>
               Životopis
            </Typography>
            <CustomAppBar />
            </CenterBox>
        </>    
    )
}

export default CuriculumVitae
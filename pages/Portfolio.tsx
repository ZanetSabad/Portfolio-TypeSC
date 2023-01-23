// react
import * as React from 'react';
import { Typography } from '@mui/material';
import CustomAppBar from '../components/common/CustomAppBar';
import CenterBox from '../components/common/CenterBox';

const Portfolio = () => {
    return(
        <>
        <CenterBox flexDirection='column'>
            <Typography align='center'>
                Portfolio, moje, moje
            </Typography>
            <CustomAppBar />
            </CenterBox>
        </>    
    )
}

export default Portfolio
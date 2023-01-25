// react
import * as React from 'react';
import { Typography } from '@mui/material';
import Navigation from '../components/section/Navigation';
import CenterBox from '../components/common/CenterBox';

const Portfolio = () => {
    return(
        <>
        <CenterBox flexDirection='column'>
            <Typography align='center'>
                Portfolio, moje, moje
            </Typography>
            <Navigation />
            </CenterBox>
        </>    
    )
}

export default Portfolio
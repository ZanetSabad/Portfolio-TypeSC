// react
import * as React from 'react';
import { Typography } from '@mui/material';
import Navigation from '../components/section/Navigation';
import CenterBox from '../components/common/CenterBox';

const CuriculumVitae = () => {
    return(
        <>
        <CenterBox flexDirection='column'>
            <Typography align='center'>
               Životopis
            </Typography>
            <Navigation />
            </CenterBox>
        </>    
    )
}

export default CuriculumVitae
// react
import * as React from 'react';
// @mui
import {
  Box, 
  BoxProps,
  ContainerProps,
  Card,
  Typography,
  styled,
  } from '@mui/material';
import CustomTypography from 'components/common/CustomTypography';

interface TitleOnPageProps {}


const CustomContainerRoot = styled(Card)<ContainerProps>(({theme}) => ({
    backgroundColor: "#89345e74",
    height: "20vh",
    lineHeight: "20vh",
    color: "#89345e",  
}));  

const HeadBox = styled(Box)<BoxProps>(({ theme }) => ({
  marginLeft: theme.direction === 'ltr' ? 'auto' : 'none',
  marginRight: theme.direction === 'rtl' ? 'auto' : 'none',
  position: "relative",
  width: "78vw",
}));


const TitleOnPage: React.FunctionComponent<TitleOnPageProps> = (props) => {
 
    return (       
      <>
        <CustomContainerRoot>
          <CustomTypography>
          <HeadBox>
              <Typography variant="h2" textAlign="center" sx={{color:"primary.main", letterSpacing: "0.1em"}}>
                      Kdo jsem
              </Typography>
            </HeadBox>
          </CustomTypography>
        </CustomContainerRoot>
      </> 
    );
  };


export default TitleOnPage
// react
import * as React from 'react';
// next
import { useRouter } from 'next/router';
// @mui
import { Box, BoxProps, Grid, GridProps, Typography, useTheme, styled } from '@mui/material';
// custom components
import CenterBox from '../common/CenterBox';
import ButtonLink from '../common/ButtonLink';
// import TypingEffect from 'components/common/TypingEffect';


// type
interface HomePageProps {}

const HomePage: React.FunctionComponent<HomePageProps> = (props) => {
  // const {
  //   palette: { info },
  // } = useTheme();
  // const router = useRouter();

  return (
    <> 
     <CenterBox flexDirection='column'>
        <Box>
        <Typography component='h1' variant='h3' sx={{marginBottom: '0.5em', textTransform: 'uppercase', fontWeight: 600}} >
            Jsem
        </Typography>
        <Typography component='h1' variant='h2' fontWeight='bold' color='text.secondary' sx={{marginBottom: '0.5em', textTransform: 'uppercase'}}>
            Žaneta Sabadková
        </Typography>
        </Box>
        <Box flexDirection='column' 
                  sx={{textAlign: 'center'}}>
            <Typography component='p' variant='h5' sx={{letterSpacing: '0.1em'}}>
                  začínající
            </Typography>
            <Typography component='h6' variant='h5' sx={{letterSpacing: '0.3em', fontWeight: 700}}>
                  Front-end
            </Typography>
            <Typography component='h6' variant='h5' sx={{letterSpacing: '0.3em', fontWeight: 700}}>
                  developer
            </Typography>
         </Box>
        
         <ButtonLink
            color='primary'
            href='/Portfolio'
            size='medium'
            sx={{ marginTop: '2rem', marginLeft: '15em' }}
            variant='contained'
            
          >
            Portfolio
          </ButtonLink>
          
      </CenterBox>
    </>
  );
};

export default HomePage;

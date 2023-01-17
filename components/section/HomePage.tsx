// react
import * as React from 'react';
// next
import { useRouter } from 'next/router';
// @mui
import { Box, Typography, useTheme } from '@mui/material';
// custom components
import CenterBox from '../common/CenterBox';
// import TypingEffect from 'components/common/TypingEffect';

// type
interface HomePageProps {}

const HomePage: React.FunctionComponent<HomePageProps> = (props) => {
  const {
    palette: { info },
  } = useTheme();
  const router = useRouter();

  return (
    
     <CenterBox flexDirection='column'>
        <Box>
        <Typography component="p" variant="h5" sx={{marginBottom: "1em", textTransform: "uppercase"}} >
            Jsem
        </Typography>
        <Typography component="h1" variant="h2" fontWeight="bold" color="text.secondary" sx={{marginBottom: "0.5em", textTransform: "uppercase"}}>
            Žaneta Sabadková
        </Typography>
      </Box>
      <Box flexDirection="column" 
            sx={{textAlign: "center"}}>
      <Typography component="p" variant="h5" sx={{letterSpacing: "0.25em"}}>
            začínající
      </Typography>
      <Typography component="p" variant="h6" sx={{letterSpacing: "0.4em", fontWeight: 700}}>
            front-end
      </Typography>
      <Typography component="p" variant="h6" sx={{letterSpacing: "0.4em", fontWeight: 700}}>
            developer
      </Typography>
      </Box>
    </CenterBox>
  );
};

export default HomePage;

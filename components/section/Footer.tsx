// react
import * as React from 'react';
// @mui
import {
  Card,
  CardProps,
  Typography,
  styled,
} from '@mui/material';

interface FooterProps {}

const CustomCard = styled(Card)<CardProps>(({ theme }) => ({
    backgroundColor: "primary.main",
  [theme.breakpoints.up('sm')]: {
    margin: '-2rem',
    padding: '2rem',
  },
}));



const Footer: React.FunctionComponent<FooterProps> = (props) => {
 
  return (
    <>
      <CustomCard>
        <Typography component="p" variant="body1" textAlign="center" sx={{color:"black", letterSpacing: "0.1em"}}>
                &copy; Na brzkou shledanou - Žaneta Sabadková &#128540;
        </Typography>
      </CustomCard>
      
    </>
  );
};

export default Footer;
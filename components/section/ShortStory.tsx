// react
import * as React from 'react';
// @mui
import {
  Box,
  BoxProps,
  Card,
  CardProps,
  Typography,
  styled,
  CardContent,
} from '@mui/material';
// custom component
import ButtonLink from '../common/ButtonLink'
import ConstantsContext from '../../context/constantsContext';
// type
interface ShortStoryProps {}

const CustomContainer = styled(Box)<BoxProps>(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    marginTop: '-3em',
  scrollMarginTop: '1rem',
  [theme.breakpoints.up('sm')]: {
    scrollMarginTop: '2rem',
  },
}));

const CustomCard = styled(Card)<CardProps>(({ theme }) => ({
  margin: '1rem',
  overflow: 'hidden',
  [theme.breakpoints.up('sm')]: {
    margin: '2rem',
  },
  [theme.breakpoints.up('md')]: {
    height: 'fit-content',
  },
  [theme.breakpoints.up('lg')]: {
    height: '90vh',
  },
}));


const LinksBox = styled(Box)<BoxProps>(({ theme }) => ({
    display: 'flex', 
    flexDirection: 'row',
    justifyContent: 'space-around',   

  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

const ShortStory: React.FunctionComponent<ShortStoryProps> = (props) => {

  const { contactLinks } = React.useContext(ConstantsContext);
  contactLinks?.sort((a, b) => (a.order > b.order ? 1 : -1));

  return (
    <CustomContainer id='about' >
      <CustomCard  sx={{ width: '70%',  boxShadow: '1em 1em 2em black', background: '#f2f2f2'}}>
            <Card
              sx={{ margin: 'auto', 
                    boxShadow: 'none', 
                    height: '100%', 
                    width: '50%', 
                    transform: 'translate(0%,15%)',
                    background: '#f2f2f2'
                    
                }}
            >
              <Typography component='h2' variant='h5' fontWeight='bold' color='secondary' sx={{borderLeft: '0.2em solid black', paddingLeft: '1em', marginBottom: '1em'}}>
               Ve zkratce...
              </Typography>
              <Typography component='h2' variant='h6'>
                Kdo jsem...
              </Typography>
              <CardContent>
                <Typography component='p' variant='subtitle1'>
                Zatím jsem začátečník ve světě IT. Teď jsem dodělala kurz Webové vývojářky a chci pokračovat dál. 
                Mám neskutečnou motivaci a chuť dokázat, že mám na to stát se Frontendistkou.
                </Typography>               
                <Typography component='p' variant='subtitle1'>
                Teď pokračuji ještě kurzem angličtiny a samostudiem.
                </Typography>
                <Typography component='p' variant='subtitle1'>
                Momentálně se ucházím o pozici jako <b>junior kodér/Front-end</b>.
                </Typography>
              </CardContent>

              <LinksBox>
                {contactLinks?.map((ContactLink, index) => (
              <ButtonLink
                    key={ContactLink.label + ContactLink.href}
                    href={ContactLink.href}                    
                    {...ContactLink.buttonProps} 
                    variant='outlined'
                    sx={{border: '2px solid black',
                        background: '#45A9BF', 
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-around',
                        fontSize: '0.85em',
                        width: '250px',
                        height: '100px',
                        '&: hover': {
                            backgroundColor: '#45A9BF',
                            border: '2px solid black',                           
                          },
                    }}
                  >
                    {ContactLink.Icon}
                    {ContactLink.label}                    
              </ButtonLink>
            
              ))}
              </LinksBox>
          
            </Card>
      </CustomCard>
    </CustomContainer>
  );
};

export default ShortStory;
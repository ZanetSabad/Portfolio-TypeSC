// react
import * as React from 'react';
// next
import Image from 'next/image';
// @mui
import {
  Box,
  BoxProps,
  Card,
  CardActions,
  CardActionsProps,
  CardProps,
  Grid,
  Skeleton,
  Typography,
  styled,
  CardContent,
  Collapse,
  useMediaQuery,
  useTheme,
  Stack,
} from '@mui/material';
// custom component
import ContainerGrid from '../common/ContainerGrid';
import ButtonLink from "../common/ButtonLink"
import ConstantsContext from '../../context/constantsContext';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import ComponentsContext from '../../context/componentsContext';
// import ExpandMoreIconButton from 'components/common/ExpandMoreIconButton';
// type
interface AboutProps {}

const CustomContainer = styled(Box)<BoxProps>(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    marginTop: "-3em",
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

const CustomCardActions = styled(CardActions)<CardActionsProps>(
  ({ theme }) => ({
    border: "2px solid green",
    justifyContent: 'space-between',
    width: '100%',
    [theme.breakpoints.up('md')]: {
      justifyContent: 'flex-end',
    },
    [theme.breakpoints.up('lg')]: {
      position: 'absolute',
      bottom: 0,
    },
  })
);

const LinksBox = styled(Box)<BoxProps>(({ theme }) => ({
    display: "flex", 
    flexDirection: "row",
    justifyContent: "space-around",
    // alignItems: "center",
    

  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));


const About: React.FunctionComponent<AboutProps> = (props) => {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [showMore, setShowMore] = React.useState(false);

  const { contactLinks } = React.useContext(ConstantsContext);
  contactLinks?.sort((a, b) => (a.order > b.order ? 1 : -1));

  const theme = useTheme();
  const isUpMd = useMediaQuery(theme.breakpoints.up('md'));

  React.useEffect(() => {
    if (isUpMd) setShowMore(true);
    else setShowMore(false);
  }, [isUpMd]);

  return (
    <CustomContainer id="about" >
      <CustomCard  sx={{ width: "70%",  boxShadow: "1em 1em 2em black", background: "#f2f2f2"}}>
        {/* <ContainerGrid sx={{margin: "auto", height: '100%', width: "90%", border: "2px solid yellow"}}> */}
          {/* <Grid item xs={20} md={6} style={{ padding: 0, border: "2px solid green"  }}>
           
          </Grid> */}
          {/* <Grid
            item
            xs={12}
            md={6}
            style={{ padding: '2rem', position: 'relative', border: "2px solid blue" }}
          > */}
            <Card
              sx={{ margin: "auto", 
                    boxShadow: 'none', 
                    height: '100%', 
                    width: "50%", 
                    transform: "translate(0%,15%)",
                    background: "#f2f2f2"
                    
                }}
            >
              <Typography component="h2" variant="h5" fontWeight="bold" color="secondary" sx={{borderLeft: "0.2em solid black", paddingLeft: "1em", marginBottom: "1em"}}>
               Ve zkratce...
              </Typography>
              <Typography component="h2" variant="h6">
                Kdo jsem...
              </Typography>
              <CardContent>
                <Typography component="p" variant="subtitle1">
                Zatím jsem začátečník ve světě IT. Teď jsem dodělala kurz Webové vývojářky a chci pokračovat dál. 
                Mám neskutečnou motivaci a chuť dokázat, že mám na to stát se Frontendistkou.
                </Typography>               
                <Typography component="p" variant="subtitle1">
                Teď pokračuji ještě kurzem angličtiny a samostudiem.
                </Typography>
                <Typography component="p" variant="subtitle1">
                Momentálně se ucházím o pozici jako <b>junior kodér/Front-end</b>.
                </Typography>
              </CardContent>

              <LinksBox>
                {contactLinks?.map((ContactLink, index) => (
              <ButtonLink
                    key={ContactLink.label + ContactLink.href}
                    href={ContactLink.href}                    
                    {...ContactLink.buttonProps} 
                    variant="outlined"
                    sx={{border: "2px solid black",
                        background: "#45A9BF", 
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-around",
                        fontSize: "0.85em",
                        width: "250px",
                        height: "100px",
                        '&: hover': {
                            backgroundColor: "#45A9BF",
                            border: "2px solid black",                           
                          },
                    }}
                  >
                    {ContactLink.Icon}
                    {ContactLink.label}                    
              </ButtonLink>
            
              ))}
              </LinksBox>
          
            </Card>
          {/* </Grid> */}
        {/* </ContainerGrid> */}
      </CustomCard>
    </CustomContainer>
  );
};

export default About;
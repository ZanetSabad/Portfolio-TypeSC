// react
import * as React from 'react';
// next
import { useRouter } from 'next/router';
// @mui
import {
  AppBar,
  AppBarProps,
  Box,
  BoxProps,
  Container,
  Toolbar,
  ToolbarProps,
  styled,
  Typography,
} from '@mui/material';
// custom component
import ButtonLink from '../common/ButtonLink';
import ButtonIcon from '../common/ButtonIcon';
import LinkDownload from '../common/LinkDownload'
import ConstantsContext from '../../context/constantsContext';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import HomeIconLink from '../common/HomeIconLink';
// type
interface NavigationProps{}


const CustomAppBarRoot = styled(AppBar)<AppBarProps>(({ theme }) => ({
  backgroundColor: 'transparent',
  boxShadow: 'none',
}));

const LinkContainer = styled(Box)<BoxProps>(() => ({
}));

const LinksBox = styled(Box)<BoxProps>(({ theme }) => ({
    height: '70vh',
    display: 'flex', 
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    fontSize: '20px',    

  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

const IconBox = styled(Box)<BoxProps>(({theme}) => ({
  textAlign: 'center'
}))

const HomeBox = styled(Box)<BoxProps>(({theme}) => ({
  textAlign: 'center',
  paddingTop: '2em',
  
}))

const Navigation: React.FunctionComponent<NavigationProps> = () => {
  const [dropdownState, setDropdownState] = React.useState(false);
  const { navLinks } = React.useContext(ConstantsContext);
  navLinks?.sort((a, b) => (a.order > b.order ? 1 : -1));

  const { iconLinks } = React.useContext(ConstantsContext);
  iconLinks?.sort((a, b) => (a.order > b.order ? 1 : -1));

  const appBarRef = React.useRef(null);
  const handleClickOutside = () => {
    if (dropdownState) setDropdownState(false);
  };

  useOnClickOutside(appBarRef, handleClickOutside);

  return (
    <>
      <CustomAppBarRoot position='absolute' ref={appBarRef} >
        <Container  disableGutters 
                    maxWidth='sm' 
                    sx={{
                        width: '300px', 
                        height: '90vh',
                        bgcolor: 'primary.main',
                        borderRadius: '0.5em',
                        marginTop: '2em', 
                        marginLeft: '3em',
                        boxShadow: '0.3em 0.3em 1.5em black',
                         }}>
            <LinkContainer >
              <HomeBox>
                <HomeIconLink />
              </HomeBox>  
              <LinksBox>
                {navLinks?.map((NavLink, index) => (
                  <ButtonLink
                    key={NavLink.label + index + NavLink.href}
                    href={NavLink.href}
                    {...NavLink.buttonProps}
                  >
                    {NavLink.label}
                  </ButtonLink>
                ))}
                <LinkDownload />

                <IconBox> 
                  <Typography component='h6' 
                              variant='h5' 
                              color='secondary' 
                              fontWeight='600'
                  >
                    Follow me
                  </Typography>

                {iconLinks?.map((IconLink, index) => (
                  <ButtonIcon
                    key={IconLink.href}
                    href={IconLink.href}
                  >
                    {IconLink.Icon}
                  </ButtonIcon>
                ))}
              
              </IconBox>
            </LinksBox>
          </LinkContainer>
        </Container>
      </CustomAppBarRoot>
    </>
  );
};

export default Navigation;
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
  Grow,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  ToolbarProps,
  styled,
  useTheme,
} from '@mui/material';
// custom component
// import NameLogo from 'components/common/NameLogo';
import ButtonLink from './ButtonLink';
import LinkDownload from "./LinkDownload"
// import MenuToggler from 'components/common/MenuToggler';
import ConstantsContext from '../../context/constantsContext';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import ComponentsContext from '../../context/componentsContext';
// import Projects from 'pages/projects';
// type
interface CustomAppBarProps {}

const CustomAppBarRoot = styled(AppBar)<AppBarProps>(({ theme }) => ({
  backgroundColor: 'transparent',
  boxShadow: 'none',
}));

const LinkContainer = styled(Box)<BoxProps>(({ theme }) => ({
    height: "70vh",
//   marginLeft: theme.direction === 'ltr' ? 'auto' : 'none',
//   marginRight: theme.direction === 'rtl' ? 'auto' : 'none',
}));

const LinksBox = styled(Box)<BoxProps>(({ theme }) => ({
    height: "70vh",
    display: "flex", 
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",

  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

const CustomToolbar = styled(Toolbar)<ToolbarProps>(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    padding: 0,
  },
}));

const CustomAppBar: React.FunctionComponent<CustomAppBarProps> = (props) => {
  const [dropdownState, setDropdownState] = React.useState(false);
  const { containerMaxWidth = 'lg' } = React.useContext(ComponentsContext);
  const { navLinks } = React.useContext(ConstantsContext);
  navLinks?.sort((a, b) => (a.order > b.order ? 1 : -1));

  const appBarRef = React.useRef(null);
  const handleClickOutside = () => {
    if (dropdownState) setDropdownState(false);
  };

  useOnClickOutside(appBarRef, handleClickOutside);

  const router = useRouter();
  const handleDropdownItemClick = (href: string) => {
    setDropdownState(false);
    router.push(href);
  };

  const {
    palette: { background },
    shadows,
  } = useTheme();

  return (
    <>
      <CustomAppBarRoot position="absolute" ref={appBarRef} >
        <Container  disableGutters 
                    maxWidth="sm" 
                    sx={{
                        width: "300px", 
                        height: "70vh",
                        bgcolor: "primary.main",
                        borderRadius: "0.5em",
                        marginTop: "5em", 
                        marginLeft: "5em",
                        
                         }}>
          {/* <CustomToolbar sx={{ marginLeft: 'auto', border: "4px solid green",  width: "100%", height: "80vh" }}> */}
            {/* <NameLogo
              bgColor="white"
              color="#383838"
              name="john doe"
              onClick={() => router.push('/')}
            /> */}
            <LinkContainer >
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
              </LinksBox>
              {/* <MenuToggler
                color="info"
                onClick={() => setDropdownState(!dropdownState)}
                open={dropdownState}
                sx={{ display: { sm: 'none' } }}
              /> */}
            </LinkContainer>
          {/* </CustomToolbar> */}
        </Container>
        <Box
          sx={{
            backgroundColor: "transparent",
            margin: 0,
            transition: 'box-shadow 0.3s ease-in-out',
            boxShadow: dropdownState ? '0px 6px 4px 0px rgba(0,0,0,1)' : '',
            WebkitBoxShadow: dropdownState
              ? '0px 6px 4px 0px rgba(0,0,0,1)'
              : '',
          }}
        >
          <Container maxWidth={containerMaxWidth}>
            <List component="div">
              {navLinks?.map((NavLink, index) => (
                <Grow
                  in={dropdownState}
                  key={NavLink.label + index}
                  style={{ transformOrigin: 'center left' }}
                  {...(dropdownState ? { timeout: index * 300 } : {})}
                  unmountOnExit
                >
                  <ListItemButton
                    onClick={() => handleDropdownItemClick(NavLink.href)}
                    sx={{
                      borderRadius: '4px',
                      '&: hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                      },
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        color: 'inherit',
                        fontSize: 'large',
                        minWidth: '2rem',
                      }}
                    >
                      {NavLink.Icon}
                    </ListItemIcon>
                    <ListItemText primary={NavLink.label} />
                  </ListItemButton>
                </Grow>
              ))}
            </List>
          </Container>
        </Box>
      </CustomAppBarRoot>
    </>
  );
};

export default CustomAppBar;
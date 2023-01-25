// react
import * as React from 'react';
// @mui icon
import HomeIcon from '@mui/icons-material/Home';
// custom component
import IconButtonLink from './IconButtonLink';
// type
import { IconButtonProps } from '@mui/material';
interface HomeIconLinkProps extends IconButtonProps {
  anchorStyles?: React.CSSProperties;
  href?: string;
  iconColor?:
    | 'inherit'
    | 'action'
    | 'disabled'
    | 'primary'
    | 'secondary'
    | 'error'
    | 'info'
    | 'success'
    | 'warning';

}

const HomeIconLink: React.FunctionComponent<HomeIconLinkProps> = (
  props
) => {
  const {
    anchorStyles,
    href = '/',
    iconColor = 'info',
    ...otherProps
  } = props;

  return (
    <IconButtonLink aria-label='Home button' href={href} {...otherProps}>
      <HomeIcon color={iconColor} sx={{fontSize: '50px'}} />
    </IconButtonLink>
  );
};

export default HomeIconLink;



// react
// import * as React from 'react';
// // type
// import { Link, LinkProps, styled } from '@mui/material';
// import HomeIcon from '@mui/icons-material/Home';

// interface LinkHomeProps extends LinkProps {}

// const LinkHomeRoot = styled(Link)<LinkHomeProps>(({ theme, variant }) => ({
//       color: 'white',
//       letterSpacing: '0.1em',
//       fontWeight: 700,  
// }));

// const LinkHome: React.FunctionComponent<LinkHomeProps> = (props) => {
//   const { ...otherProps } = props;

//   return (
//     <LinkHomeRoot  {...otherProps}>
//       <HomeIcon />
//     </LinkHomeRoot>
//   );
// };

// export default LinkHome;
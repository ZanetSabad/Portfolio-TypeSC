// react
import * as React from 'react';
// type
import { Link, LinkProps, styled } from '@mui/material';

interface LinkDownloadProps extends LinkProps {}

const LinkDownloadRoot = styled(Link)<LinkDownloadProps>(({ theme, variant }) => ({
      color: "white",
      letterSpacing: "0.1em",
      fontWeight: 700,  
}));

const LinkDownload: React.FunctionComponent<LinkDownloadProps> = (props) => {
  const { ...otherProps } = props;

  return (
    <LinkDownloadRoot  {...otherProps} 
          href="/docs/Zaneta_Sabadkova_CV.pdf" 
          download 
          target="_blank" 
          rel="noopener" 
        >
      stáhnout životopis
    </LinkDownloadRoot>
  );
};

export default LinkDownload;

// react
// import * as React from 'react';
// // next
// import Link from 'next/link';
// // custom component
// import CustomLink from './CustomLink';
// // type
// import { LinkProps } from '@mui/material';




// interface LinkDownloadProps extends LinkProps {
//   href?: string;
// }

// const CustomButtonRoot = styled(Link)<LinkProps>(({ theme, variant }) => ({
//   fontWeight: 700,
//   textTransform: 'uppercase',
// }));

// // const CustomButtonWithRef = React.forwardRef<ButtonDownloadProps, ButtonDownloadProps>(
// //   ({ children, ...otherProps }, ref) => (
// //     <CustomButton {...otherProps}>{children}</CustomButton>
// //   )
// // );

// // CustomButtonWithRef.displayName = 'CustomButtonWithRef';

// const ButtonLink: React.FunctionComponent<LinkDownloadProps> = (props) => {
//   const { children, href = '#', ref, ...otherProps } = props;

//   return (
    
//     <Link   href="/docs/Zaneta_Sabadkova_CV.pdf" 
//             target="_blank" 
//             download             
//             >
//         stáhnout životopis
//     </Link>
    
//   );
// };

// export default ButtonLink;
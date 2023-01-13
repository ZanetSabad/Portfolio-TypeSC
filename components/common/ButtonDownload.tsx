// react
import * as React from 'react';
// next
import Link from 'next/link';
// custom component
import CustomButton from 'components/common/CustomButton';
// type
import { ButtonProps } from '@mui/material';


interface ButtonDownloadProps extends ButtonProps {
  href?: string;
}

// const CustomButtonWithRef = React.forwardRef<ButtonDownloadProps, ButtonDownloadProps>(
//   ({ children, ...otherProps }, ref) => (
//     <CustomButton {...otherProps}>{children}</CustomButton>
//   )
// );

// CustomButtonWithRef.displayName = 'CustomButtonWithRef';

const ButtonLink: React.FunctionComponent<ButtonDownloadProps> = (props) => {
  const { children, href = '#', ref, ...otherProps } = props;

  return (
    <Link   href="/docs/Zaneta_Sabadkova_CV.pdf" 
            target="_blank" 
            download 
            color="#f2f2f2f2">
        stáhnout životopis
    </Link>
  );
};

export default ButtonLink;
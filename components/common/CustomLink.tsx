// react
import * as React from 'react';
// @mui
import { Link, LinkProps, styled } from '@mui/material';
// type
interface CustomLinkProps extends LinkProps {}

const CustomLinkRoot = styled(Link)<LinkProps>(({ theme, variant }) => ({
  fontWeight: 700,
  textTransform: 'uppercase',
}));

const CustomLink: React.FunctionComponent<CustomLinkProps> = (props) => {
  const { children, ...otherProps } = props;

  return (
    <CustomLinkRoot {...otherProps}>
      {children}
    </CustomLinkRoot>
  );
};

export default CustomLink;
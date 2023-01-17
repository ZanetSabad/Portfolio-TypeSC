// react
import * as React from 'react';
// @mui
import { IconButton, IconButtonProps, styled } from '@mui/material';
// type
interface CustomIconButtonProps extends IconButtonProps {}

const CustomIconButtonRoot = styled(IconButton)<IconButtonProps>(
  ({ theme }) => ({
    border: "2px solid black",
    boxShadow: "0.2em 0.2em 0.5em black",
    borderRadius: "0.5em",
  })
);

const CustomIconButton: React.FunctionComponent<CustomIconButtonProps> = (
  props
) => {
  const { children, disableRipple, ...otherProps } = props;

  return (
    <CustomIconButtonRoot  disableRipple {...otherProps}>
      {children}
    </CustomIconButtonRoot>
  );
};

export default CustomIconButton;

// react
import * as React from 'react';
// @mui
import { Button, ButtonProps, styled } from '@mui/material';
// type
interface CustomButtonProps extends ButtonProps {}

const CustomButtonRoot = styled(Button)<ButtonProps>(({ theme, variant }) => ({
  fontWeight: 700,
  textTransform: 'uppercase',
}));

const CustomButton: React.FunctionComponent<CustomButtonProps> = (props) => {
  const { children, ...otherProps } = props;

  return (
    <CustomButtonRoot disableRipple {...otherProps}>
      {children}
    </CustomButtonRoot>
  );
};

export default CustomButton;
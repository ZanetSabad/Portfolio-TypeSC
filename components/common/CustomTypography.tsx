// react
import * as React from 'react';
// @emotion
import styled from '@emotion/styled';
// type
interface CustomTypographyProps
  extends React.ThHTMLAttributes<HTMLElement> {}

const Root = styled('h2')({

});

const CustomTypography: React.FunctionComponent<CustomTypographyProps> = (props) => {
  const { children, ...otherProps } = props;

  return <Root {...otherProps}>{children}</Root>;
};

export default CustomTypography;
// react
import * as React from 'react';
// @emotion
import styled from '@emotion/styled';
// type
interface CustomAnchorProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

const Root = styled('a')({
  // border: '2px solid red',
  // marginLeft: '220px',
  // width: '100px',
  // height: '100px',
  // position: 'absolute',
  // color: 'inherit',
  // textDecoration: 'none',
  // cursor: 'pointer',
//   '&:before': {
//     width: '100%',
//   },
//   '&:hover:before': {
//     transform: 'scaleX(1)',
//   },
//   ':focus-visible': {
//     outline: 'none',
//     ':before': {
//       transform: 'scaleX(1)',
//     },
//   },
});

const CustomAnchor: React.FunctionComponent<CustomAnchorProps> = (props) => {
  const { children, ...otherProps } = props;

  return <Root {...otherProps}>{children}</Root>;
};

export default CustomAnchor;
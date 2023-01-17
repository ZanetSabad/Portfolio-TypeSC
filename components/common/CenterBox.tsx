// react
import { red } from '@mui/material/colors';
import * as React from 'react';
// type
interface CenterBoxProps extends React.CSSProperties {
  height?: string | number;
  children?: any;
}

const CenterBox: React.FunctionComponent<CenterBoxProps> = (props) => {
  const {children, height = '100vh', ...otherProps } = props;
  return (
    <div
      style={{
        border: "2px solid red",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height,
        ...otherProps,
      }}
    >
      {children}
    </div>
  );
};

export default CenterBox;

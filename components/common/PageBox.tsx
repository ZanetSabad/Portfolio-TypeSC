// react
// import { red } from '@mui/material/colors';
import * as React from 'react';
// type
interface PageBoxProps extends React.CSSProperties {
  height?: string | number;
  children?: any
}

const PageBox: React.FunctionComponent<PageBoxProps> = (props) => {
  const {children, width='70vw', height = '100vh', ...otherProps } = props;
  return (
    <div
      style={{
        textAlign: 'center',
        marginLeft: 'ltr' ? 'auto' : 'none',
        height,    
        width,    
        ...otherProps,
      }}
    >
      {children}
    </div>
  );
};

export default PageBox;
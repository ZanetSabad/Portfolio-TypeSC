// react
import * as React from 'react';
// next
import Head from 'next/head';

// type
import { Page } from '../../constants/pages';
interface MainLayoutProps {
  pageData?: Page;
  children?: any;
}

const MainLayout: React.FunctionComponent<MainLayoutProps> = (props) => {
  const { children, pageData, ...otherProps } = props;

  return (
    <>
      {pageData && (
        <Head>
          <title>{pageData.title ? pageData.title : 'No page title'}</title>
          {pageData.description && (
            <meta name="description" content={pageData.description} />
          )}
        </Head>
      )}
      {children}
    </>
  );
};

export default MainLayout;
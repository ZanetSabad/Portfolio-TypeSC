// react
import * as React from 'react';
import MainLayout from 'components/layout/MainLayout';
// custom context
import ConstantsContext from '../context/constantsContext';
// type
import type { NextPage } from 'next';

const Home: NextPage = () => {
  const { pages } = React.useContext(ConstantsContext);

  return (
    <>
      <MainLayout pageData={pages!.home}>
       
      </MainLayout>
    </>
  );
};

export default Home;

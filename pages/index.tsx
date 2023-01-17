// react
import * as React from 'react';
//components
import MainLayout from 'components/layout/MainLayout';
// custom context
import ConstantsContext from '../context/constantsContext';
//style
import styles from "../styles/Home.module.css"
// type
import type { NextPage } from 'next';
import HomePage from '../components/section/HomePage';

const Home: NextPage = () => {
  const { pages } = React.useContext(ConstantsContext);

  return (
    <>
     <div className={styles.myImg}>
        <MainLayout pageData={pages!.home}> 
          <HomePage />
        
          
        </MainLayout>
      </div>
    </>
  );
};

export default Home;

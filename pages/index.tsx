// react
import * as React from 'react';
//components
import MainLayout from 'components/layout/MainLayout';
// custom context
import ConstantsContext from '../context/constantsContext';
//style
import styles from '../styles/Home.module.css'
// type
import type { NextPage } from 'next';
import HomePage from '../components/section/HomePage';
import ShortStory from '../components/section/ShortStory'
import Footer from '../components/section/Footer';
import SkillsProjects from '../components/section/Skills';
import Navigation from 'components/section/Navigation';
// import SkillList from '../components/common/SkillList'




const Home: NextPage = () => {
  const { pages } = React.useContext(ConstantsContext);

  return (
    <>
     <div className={styles.myImg}>
        <MainLayout pageData={pages!.home}> 
          <Navigation />
          <HomePage />
          <ShortStory />
          <SkillsProjects />
          <Footer />
          
          
          

        
          
        </MainLayout>
      </div>
    </>
  );
};

export default Home;

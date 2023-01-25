// react
import * as React from 'react';
//components
import MainLayout from 'components/layout/MainLayout';
// type
import type { NextPage } from 'next';
// custom context
import ConstantsContext from '../context/constantsContext';
import Navigation from '../components/section/Navigation';
import Footer from '../components/section/Footer'
import TitleOnPage from '../components/section/TitleOnPage'
import AboutMyText from '../components/section/AboutMyText'

const CuriculumVitae: NextPage = () => {
    const { pages } = React.useContext(ConstantsContext);

    return(
        <>
        <MainLayout pageData={pages!.aboutMe}>
            <TitleOnPage />
            <AboutMyText />          
          
            <Navigation />
        
            <Footer />
            </MainLayout>
        </>    
    )
}

export default CuriculumVitae
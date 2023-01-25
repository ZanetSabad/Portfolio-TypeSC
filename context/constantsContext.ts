// react
import * as React from 'react';
// data
import contactLinks from '../constants/contactLinks';
import iconLinks from '../constants/iconLinks'
import navLinks from '../constants/navLinks';
import pages from '../constants/pages';
import skillsData, { Skill } from 'constants/skillsData';
// import blogPosts from 'constants/blogPostsData';
// // type
import { ContactLink } from '../constants/contactLinks';
import { IconLink } from '../constants/iconLinks'
import { NavLink } from '../constants/navLinks';
import { Pages } from '../constants/pages';


// import { BlogPost } from 'types/blogPostType';

interface ContextProps {
  navLinks?: NavLink[];
  pages?: Pages;
  iconLinks?: IconLink[];
  contactLinks?: ContactLink[];

  skills?: Skill[];

//   projects?: Project[];
//   blogPosts?: BlogPost[];
}

const context: ContextProps = {
  navLinks,
  pages,
  iconLinks,
  contactLinks, 
  skills: skillsData,
};

const ConstantsContext = React.createContext(context);

export default ConstantsContext;
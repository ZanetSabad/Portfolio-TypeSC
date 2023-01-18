// react
import * as React from 'react';
// data
import contactLinks from '../constants/contactLinks';
import iconLinks from "../constants/iconLinks"
import navLinks from '../constants/navLinks';
import pages from "../constants/pages"
// import projectsData, { Project } from 'constants/projectsData';
// import blogPosts from 'constants/blogPostsData';
// // type
import { ContactLink } from '../constants/contactLinks';
import { IconLink } from "../constants/iconLinks"
import { NavLink } from '../constants/navLinks';
import { Pages } from '../constants/pages';

// import { BlogPost } from 'types/blogPostType';

interface ContextProps {
  navLinks?: NavLink[];
  pages?: Pages;
  iconLinks?: IconLink[];
  contactLinks?: ContactLink[];

//   projects?: Project[];
//   blogPosts?: BlogPost[];
}

const context: ContextProps = {
  navLinks,
  pages,
  iconLinks,
  contactLinks,

//   projects: projectsData,
//   blogPosts,
};

const ConstantsContext = React.createContext(context);

export default ConstantsContext;
// react
import React from 'react';

// type
import { ButtonProps, IconProps } from '@mui/material';
export interface DataSkill {
    // buttonProps?: ButtonProps;
    order: number;
    Image: any;
    label: string;
}

const dataSkills: DataSkill[] = [
  { 
    // buttonProps: { color: 'info' },
    order: 1,
    label: "HTML",
    Image: "../public/images/html.png",
  },
  {
    order: 2,
    label: "CSS",
    Image: "../public/images/css.png",
  },
  {
    order: 3,
    label: "JavaScript",
    Image: "../public/images/js.png",
  },
  {
    order: 4,
    label: "SaSS",
    Image: "../public/images/sass.png",
  },
  {
    order: 5,
    label: "GIT",
    Image: "../public/images/git.png",
  },
  {
    order: 6,
    label: "CANVA",
    Image: "../public/images/canva.png",
  },
  {
    order: 7,
    label: "GitHub",
    Image: "../public/images/github.png",
  },
  {
    order: 8,
    label: "Python",
    Image: "../public/images/python.png",
  },
  {
    order: 9,
    label: "Google Analytics",
    Image: "../public/images/ga.png",
  },
  {
    order: 10,
    label: "SEO",
    Image: "../public/images/seo.png",
  },
  {
    order: 1,
    label: "ShotCut",
    Image: "../public/images/shotcut.png",
  },
  {
    order: 1,
    label: "Figma",
    Image: "../public/images/figma.png",
  },

]

export default dataSkills;
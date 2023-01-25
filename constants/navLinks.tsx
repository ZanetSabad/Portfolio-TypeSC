// react
import React from 'react';
// type
import { ButtonProps } from '@mui/material';
export interface NavLink {
  buttonProps?: ButtonProps;
  href: string;
  label: string;
  order: number;
}

const navLinks: NavLink[] = [
  {
    buttonProps: { color: 'info' },
    href: '/about-me',
    label: 'Kdo jsem',
    order: 1,
  },
  {
    buttonProps: { color: 'info' },
    href: '/portfolio',
    label: 'Portfolio',
    order: 2,
  },
  {
    buttonProps: { color: 'info' },
    href: '/curiculumVitae',
    label: 'Životopis',
    order: 3,
  },
];

export default navLinks;

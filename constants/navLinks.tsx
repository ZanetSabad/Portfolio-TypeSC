// react
import React from 'react';
// type
import { ButtonProps, IconProps } from '@mui/material';
export interface NavLink {
  buttonProps?: ButtonProps;
  href: string;
  label: string;
  order: number;
}

const navLinks: NavLink[] = [
  {
    buttonProps: { color: 'info' },
    href: '/AboutMe',
    label: 'Kdo jsem',
    order: 1,
  },
  {
    buttonProps: { color: 'info' },
    href: '/Portfolio',
    label: 'Portfolio',
    order: 2,
  },
  {
    buttonProps: { color: 'info' },
    href: '/CuriculumVitae',
    label: 'Životopis',
    order: 3,
  },
];

export default navLinks;

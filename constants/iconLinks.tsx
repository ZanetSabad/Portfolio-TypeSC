// react
import React from 'react';
// mui icons
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
// type
import { ButtonProps, IconProps } from '@mui/material';
export interface IconLink {
  href: string;
  Icon: React.ReactNode;
  order: number;
  sidebarOrder?: number;
  sidebarVisible?: boolean;
}

const iconLinks: IconLink[] = [
  {
    href: 'https://github.com/ZanetSabad',
    Icon: <GitHubIcon color="info" fontSize="large" />,
    order: 1,
    sidebarVisible: false,
  },
  {
    href: 'https://www.linkedin.com/feed/',
    Icon: <LinkedInIcon color="info" fontSize="large" />,
    order: 2,
    sidebarVisible: false,
  }
]

export default iconLinks;

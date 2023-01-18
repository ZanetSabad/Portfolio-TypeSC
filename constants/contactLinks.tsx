// react
import React from 'react';
// mui icons
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import EmailIcon from '@mui/icons-material/Email';
// type
import { ButtonProps, IconProps } from '@mui/material';
export interface ContactLink {
    buttonProps?: ButtonProps;
    order: number;
    Icon: React.ReactNode;
    href: string;
    label: string | number;
}

const contactLinks: ContactLink[] = [
  {
    buttonProps: { color: 'info' },
    order: 1,
    Icon: <ContactPhoneIcon color="info" fontSize="large"/>,
    label: "724831189",
    href: "tel:+420724831189",
  },
  {
    buttonProps: { color: 'info' },
    order: 2,
    Icon: <EmailIcon color="info" fontSize="large"/>,
    label: "zaneta.sabadkova@email.com",
    href: "mailto:zaneta.sabadkova@email.com",
  },
]

export default contactLinks;
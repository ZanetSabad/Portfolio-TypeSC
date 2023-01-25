// react
import * as React from 'react';
// next
import dynamic from 'next/dynamic';
const Image = dynamic(() => import('next/image'));
// @mui
import {
  Box,
  BoxProps,
  Card,
  CardProps,
  CardActions,
  List,
  ListItem,
  ListItemText,
  Typography,
  styled,
  useTheme,
} from '@mui/material';
// type
interface SkillCardProps extends CardProps {
  imageAlt: string | any;
  imageSrc: string | any;
  title: string;
}

const CustomCard = styled(Card)<CardProps>(({ theme }) => ({
  img: {
    borderRadius: '50%',
    transition: 'all 1s linear',
    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
  },
  p: {
    fontSize: '18px',
    color: 'transparent',
    fontWeight: 700,
    textAlign: 'center'   
   }, 
   
  '&: hover': {
    img: {
      transition: 'all 1s linear',
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 100% 0%)',
    },
    p: {
      color: '#45A9BF',
      transition: 'all 1.5s linear',      
    },
  }, 
}));

const ImageContainer = styled(Box)<BoxProps>(({ theme }) => ({
    height: '100%',
}));

const SkillCard: React.FunctionComponent<SkillCardProps> = (props) => {
  const { imageAlt, imageSrc, title, ...otherProps } = props

  return (
    <CustomCard {...otherProps}>
      <ImageContainer>
        <Image
          title={title}
          alt={imageAlt}
          src={imageSrc}
          width={100}
          height={100}
          quality={50}
        />
    
      </ImageContainer>
      
      <CardActions disableSpacing sx={{ 
                              display: 'flex', 
                              color: 'black',
                              }}>
        <List sx={{width: '100%', height:'100%', position: 'absolute', top:0, left:0}}>
          <ListItem sx={{height: '100%'}}>
            <ListItemText sx={{ display: 'flex', justifyContent: 'center'}}>
              <Typography sx={{ zIndex: '0'}}>
            {title}
            </Typography>
            </ListItemText>
          </ListItem>
        </List>
      </CardActions>
    </CustomCard>
  );
};

export default SkillCard;
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
  CardContent,
  Icon,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Skeleton,
  Typography,
  styled,
  useTheme,
} from '@mui/material';
// @mui icons
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import FavoriteIcon from '@mui/icons-material/Favorite';
// custom component
import CustomButton from 'components/common/CustomButton';
import projectsData from 'constants/projectsData';
// type
interface ProjectCardProps extends CardProps {
  imageAlt: string;
  imageSrc: string;
  title: string;
}

const CustomCard = styled(Card)<CardProps>(({ theme }) => ({
  img: {
    transition: 'all 1s linear',
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
  },
  '&: hover': {
    img: {
      transition: 'all 1s linear',
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 100% 0%)",
    },
  },
}));

const ImageContainer = styled(Box)<BoxProps>(({ theme }) => ({
  border: "4px solid orange",
  position: 'relative',
  // margin: '1rem',
  height: '15em',
  borderRadius: theme.shape.borderRadius,
  overflow: 'hidden',
}));

const ProjectCard: React.FunctionComponent<ProjectCardProps> = (props) => {
  const { imageAlt, imageSrc, title, ...otherProps } =
    props;
  const [isLoaded, setIsLoaded] = React.useState(false);
  const {
    palette: { primary },
  } = useTheme();

  return (
    <CustomCard {...otherProps}>
      <ImageContainer>
        <Image
          alt={imageAlt}
          src={imageSrc}
          layout="fill"
          objectFit="cover"
          objectPosition="top center"
          onLoad={() => setIsLoaded(true)}
          quality={30}
        />
        {!isLoaded && (
          <Skeleton
            variant="rectangular"
            sx={{ height: '100%'}}
          />
        )}
      </ImageContainer>
      
      <CardActions disableSpacing>
        <List>
          <ListItem>
          
            {/* <ListItemIcon sx={{ minWidth: 'auto', marginRight: '0.5rem' }}> */}
              {/* <Icon color="primary" sx={{ display: 'flex' }}>
                <FavoriteIcon color="inherit" />
              </Icon> */}
            {/* </ListItemIcon> */}
            {/* <ListItemText>
              {isLoaded ? (
                likes
              ) : (
                <Skeleton
                  sx={{ backgroundColor: primary.main, width: '2rem' }}
                />
              )}
            </ListItemText> */}
          </ListItem>
        </List>
        {/* <CustomButton
          disableRipple
          variant="text"
          color="inherit"
          sx={{ marginLeft: 'auto' }}
          endIcon={<ChevronRightIcon />}
        >
          more
        </CustomButton> */}
      </CardActions>
    </CustomCard>
  );
};

export default ProjectCard;
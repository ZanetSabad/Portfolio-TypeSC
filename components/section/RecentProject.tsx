// react
import * as React from 'react';
// next
import { useRouter } from 'next/router';
// swiper
import { SwiperSlide } from 'swiper/react';
// @mui
import { Box, BoxProps, Typography, styled } from '@mui/material';
// custom component
import ProjectCard from '../common/ProjectCard';


// custom context
import ConstantsContext from 'context/constantsContext';
// utility
import calcArrayOfObj from 'utility/calcArrayOfObj';
import TextLink from 'components/common/Textlink';
// type
interface RecentProjectsProps {}

const CustomWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  margin: '6rem 1rem',
  [theme.breakpoints.up('sm')]: {
    margin: '6rem 2rem',
  },
}));

const RecentProjects: React.FunctionComponent<RecentProjectsProps> = (
  props
) => {
  const [activeIndex, setActiveIndex] = React.useState<number>();
  const { projects } = React.useContext(ConstantsContext);
  const router = useRouter();

  return (
    <>
    
      <Typography
        component="h2"
        variant="h4"
        color="primary"
        sx={{
          textAlign: 'center',
          marginBottom: '3rem',
        
        }}
      >
        S čím jsem už pracovala
      </Typography>
      <CustomWrapper>
        {projects ? (
          projects.map((project, index) => (
            <SwiperSlide
              key={project.id + index}
              style={{
                position: "relative",
                width: "14em",
                height: "14em",
                display: 'flex',
                flexDirection: "row",
                // transform: index === activeIndex ? 'scale(1)' : 'scale(0.75)',
                // transition: '0.2s all ease-in-out',
                border: "4px solid red"
              }}
            >
              <ProjectCard
                imageAlt={project.images[0].alt}
                imageSrc={project.images[0].src}
                
                // likes={calcArrayOfObj(project.images, 'likes')}
                onButtonClick={() => router.push(`/projects/${project.id}`)}
                sx={{
                  // border: "4px solid blue",
                  width: '100%',
                  height: "100%",     
                          
                }}
              />  

          
           
              
            </SwiperSlide>
          ))
        ) : (
          <SwiperSlide>
            <p style={{ textAlign: 'center' }}>
              Currently, there is no project available to show.
            </p>
          </SwiperSlide>
        )}
        </CustomWrapper>
        </>
  );
};

export default RecentProjects;
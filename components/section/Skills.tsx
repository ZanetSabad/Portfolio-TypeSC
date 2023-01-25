// react
import * as React from 'react';
// swiper
import { SwiperSlide } from 'swiper/react';
// @mui
import { Typography, ImageList, ImageListItem, Box, BoxProps, styled } from '@mui/material';
// custom component
import ProjectCard from '../common/SkillCard';
import CustomContainer from '../common/CustomContainer';
// custom context
import ConstantsContext from 'context/constantsContext';
// type
interface SkillsProps {}

const CustomBar = styled(Box)<BoxProps>(({ theme }) => ({
  backgroundColor: 'transparent',
  boxShadow: "0em 0em 2em black",
   marginTop: "-3em",
}));

const Skills: React.FunctionComponent<SkillsProps> = () => {
  const { skills } = React.useContext(ConstantsContext);

  return (
    <>
      <CustomBar>   
        <CustomContainer maxWidth="xl" sx={{display: "flex", 
                                            flexDirection: "column", 
                                            alignItems: "center",                        
                                            margin: "auto"
                                          }}>
          <Typography
            component="h2"
            variant="h4"
            color="primary"
            sx={{
              textAlign: 'center',
              marginTop: '6rem',
              marginBottom: '3rem',
              borderBottom: "0.1em solid #89345e",
              textDecoration: "underline",
            
            }}
          >
            S čím jsem už pracovala
          </Typography>

          <ImageList sx={{width: "55%", 
                          height: "500px", 
                          display: "flex", 
                          flexDirection: "row", 
                          justifyContent: "space-evenly", 
                          flexWrap: "wrap" }}>
            {skills ? (
              skills.map((project, index) => (
                
                <ImageListItem
                key={project.id + index}
                style={{
                  position: "relative",
                  width: "7em",
                  height: "7em",   
                }}
                >
                <ProjectCard
                    imageAlt={project.images[0].alt}
                    imageSrc={project.images[0].src}
                    title={project.title}
                    sx={{
                      textAlign: "center",
                      border: "4px solid #89345e",
                      width: '100%',
                      height: "100%",                           
                    }}
                  />  
                  </ImageListItem>   
              ))
            ) : (
              <SwiperSlide>
                <p style={{ textAlign: 'center' }}>
                  Currently, there is no project available to show.
                </p>
              </SwiperSlide>
            )}   
          </ImageList>
                  
        </CustomContainer>
      </CustomBar>
    </>
  );
};

export default Skills;
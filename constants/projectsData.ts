// dayjs
// import dayjs, { Dayjs } from 'dayjs';
// type
import { ImageProps } from 'next/image';
// import { ProjectCategory } from 'next/category';

export interface ProjectDetails {
  // category: ProjectCategory[];
  // date: Dayjs;
  id: number;
  images: ImageProps[];
  // postFileName: string;

}

export interface Project extends ProjectDetails {
  likes: number;
}

const ProjectConstructor = (props: ProjectDetails): Project => {
  const { images, id } = props;

  return {
    // category,
    // date,
  id,
  
    images,
    // postFileName,
    get likes() {
      let totalLikes = 0;
      if (this.images.length === 0) return 0;

      // this.images.forEach((image) => (totalLikes += image.likes));
      return totalLikes;
    },
  };
};

const projectsData: Project[] = [
  ProjectConstructor({
    
    // postFileName: 'bridephotoshoot',
    id: 1,
    images: [
      {
        alt: 'woman in white tank top wearing silver necklace',
        width: 100,
        height: 100,
        // likes: 42,
        src: '/images/html.png',
      },]
    }),
  ProjectConstructor({
    
    id: 2,
    images: [ 
      {
        alt: 'woman in white wedding dress standing on stairs',
        width: 100,
        height: 100,
        // likes: 59,
        src: '/images/css.png',
      },
    ]
  }),
  ProjectConstructor({
    id: 3,
    images: [ 
      {
        alt: 'woman in white wedding dress standing on stairs',
        width: 100,
        height: 100,
        // likes: 59,
        src: '/images/js.png',
      },
    ]
  }),
]



export default projectsData;

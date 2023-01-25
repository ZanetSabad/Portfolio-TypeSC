import { ImageProps } from 'next/legacy/image';


export interface SkillDetails {
  title: string;
  id: number;
  images: ImageProps[];

}

export interface Skill extends SkillDetails {
  likes: number;
}

const SkillConstructor = (props: SkillDetails): Skill => {
  const { images, id, title } = props;

  return {
    id,
    title,
    images,
    
    get likes() {
      let totalLikes = 0;
      if (this.images.length === 0) return 0;

      // this.images.forEach((image) => (totalLikes += image.likes));
      return totalLikes;
    },
  };
};

const skillsData: Skill[] = [
  SkillConstructor({
    title: 'Html',
    id: 1,
    images: [
      {
        alt: 'html',
        width: 100,
        height: 100,
        src: '/images/html.png',
      },]
    }),
  SkillConstructor({
    title: 'CSS',
    id: 2,
    images: [ 
      {
        alt: 'css',
        width: 100,
        height: 100,
        src: '/images/css.png',
      },
    ]
  }),
  SkillConstructor({
    title: 'JavaScript',
    id: 3,
    images: [ 
      {
        alt: 'javascript',
        width: 100,
        height: 100,
        src: '/images/js.png',
      },
    ]
  }),
  SkillConstructor({
    title: 'SaSS',
    id: 4,
    images: [ 
      {
        alt: 'sass',
        width: 100,
        height: 100,
        src: '/images/sass.png',
      },
    ]
  }),
  SkillConstructor({
    title: 'Git',
    id: 5,
    images: [ 
      {
        alt: 'git',
        width: 100,
        height: 100,
        src: '/images/git.png',
      },
    ]
  }),
  SkillConstructor({
    title: 'GitHub',
    id: 6,
    images: [ 
      {
        alt: 'github',
        width: 100,
        height: 100,
        src: '/images/github.png',
      },
    ]
  }),
  SkillConstructor({
    title: 'Canva',
    id: 7,
    images: [ 
      {
        alt: 'canva',
        width: 100,
        height: 100,
        src: '/images/canva.png',
      },
    ]
  }),
  SkillConstructor({
    title: 'Python',
    id: 8,
    images: [ 
      {
        alt: 'python',
        width: 100,
        height: 100,
        src: '/images/python.png',
      },
    ]
  }),
  SkillConstructor({
    title: 'Google Analytics',
    id: 9,
    images: [ 
      {
        alt: 'google analytics',
        width: 100,
        height: 100,
        // likes: 59,
        src: '/images/ga.png',
      },
    ]
  }),
  SkillConstructor({
    title: 'SEO',
    id: 10,
    images: [ 
      {
        alt: 'seo',
        width: 100,
        height: 100,
        src: '/images/seo.png',
      },
    ]
  }),
  SkillConstructor({
    title: 'ShotCut',
    id: 11,
    images: [ 
      {
        alt: 'shotcut',
        width: 100,
        height: 100,
        src: '/images/shotcut.png',
      },
    ]
  }),
  SkillConstructor({
    title: 'Figma',
    id: 12,
    images: [ 
      {
        alt: 'figma',
        width: 100,
        height: 100,
        src: '/images/figma.png',
      },
    ]
  }),  
]



export default skillsData;

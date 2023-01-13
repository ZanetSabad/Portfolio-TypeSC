// type
export interface Page {
    title?: string;
    description?: string;
  }
  
  export interface Pages {
    [key: string]: Page;
  }
  
  const pages: Pages = {
    home: {
      title: 'Žany',
      description:
        'pages číslo 1',
    },
    projects: {
      title: 'Projektyyyy',
      description:
        'Jak je*******stranka pages',
    },
    hireMe: {
      title: 'jájáájá',
      description:
        "pages číslo 2 ",
    },
  };
  
  export default pages;
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
        'Úvodní stránka',
    },
    aboutMe: {
      title: 'Kdo jsem',
      description:
        'Dovolte abych se představila',
    },
    hireMe: {
      title: 'jájáájá',
      description:
        'pages číslo 2 ',
    },
  };
  
  export default pages;
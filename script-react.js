const techReact = (params) =>
  React.createElement('div', { className: 'tech' }, [
    React.createElement('img', {
      src: `https://logo.clearbit.com/${params.url}`,
    }),

    React.createElement('span', null, params.name),
  ]);

const TECHNOLOGIES2 = [
  {
    url: 'reactjs.org',
    name: 'React JS',
  },
  {
    url: 'nodejs.org',
    name: 'Node JS',
  },
  {
    url: 'angular.io',
    name: 'Angular',
  },
];

const techRendered = TECHNOLOGIES2.map((techProps) => techReact(techProps));

ReactDOM.render(techRendered, document.getElementById('root'));

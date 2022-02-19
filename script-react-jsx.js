// Sintaxis JSX
const techReact = (params) => (
  <div className="tech">
    <img src={`https://logo.clearbit.com/${params.url}`} />
    <span>{params.name}</span>
  </div>
);

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

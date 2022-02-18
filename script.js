const tech = (params) => `
  <div class="tech">
    <img src="https://logo.clearbit.com/${params.url}" alt="" />
    <span>${params.name}</span>
  </div>
`;

const TECHNOLOGIES = [
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

// Generar componentes en base al array por medio de forEach
TECHNOLOGIES.forEach((techArray) => {
  document.body.innerHTML += tech(techArray);
});

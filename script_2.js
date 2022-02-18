// Ejemplo de componente utilizando la api del DOM

const techDOM = (params) => {
  const div = document.createElement('div');
  div.className = 'tech';

  const img = document.createElement('img');
  img.src = `https://logo.clearbit.com/${params.url}`;

  const span = document.createElement('span');
  const text = document.createTextNode(params.name);

  div.appendChild(img);
  div.appendChild(span);
  span.appendChild(text);

  return div;
};

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

// Generar componentes en base al array por medio de forEach
TECHNOLOGIES2.forEach((techArray) => {
  document.body.appendChild(techDOM(techArray));
});

const placeslist = document.getElementById('places-list');
const li = document.createElement('li');
li.innerText = ' uttorbon';
placeslist.appendChild(li);

const maincontent = document.getElementById('main-content');
const section = document.createElement('section')
const h1 = document.createElement('h1')
h1.innerText = 'How are you'
section.appendChild(h1);
maincontent.appendChild(section)

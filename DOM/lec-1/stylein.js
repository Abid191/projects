const sections = document.querySelectorAll('section');
// console.log(sections)
for( const section of sections){
    // console.log(section);
    section.style.border = '2px solid black';
    section.style.marginBottom = '5px';
    section.style.padding = '10px';
    section.style.borderRadius = '15px'
    section.style.backgroundColor = 'lightgrey'
}

const fruits_container = document.getElementById('fruits');
fruits_container.style.backgroundColor = 'orange'
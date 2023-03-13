const loadCountries = () =>{
   fetch('https://restcountries.com/v3.1/all')
   .then(res => res.json())
   .then(data => displayContries(data))

}

const displayContries = countries =>{
  const  countriesContainer = document.getElementById('all-countries')

    countries.forEach(country =>{
       console.log(country.cca2)
       const countryDiv = document.createElement('div')
       countryDiv.classList.add('country')
       countryDiv.innerHTML =`
        <h3> name: ${country.name.common} </h3>
        <p> capital: ${country.capital ? country.capital[0] :'no capital'} </p>

        <button onclick="load('${country.cca2}') "> details </button>
       `
       countriesContainer.appendChild(countryDiv)
    })
}

const load = code =>{
    const url = `https://restcountries.com/v3.1/alpha/{code}${code}`
    // console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))
}

loadCountries()
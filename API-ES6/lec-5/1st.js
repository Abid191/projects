const loadPhone = async (searchText) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    const res = await fetch(url)
    const data = await res.json()
    displayPhone(data.data)
}

const displayPhone = phones => {
    const phoneContainer = document.getElementById('phone-conatiner')
    phoneContainer.textContent =''
    // display some phones

    phones = phones.slice(0,2)

    // no phn found

  const noPhn =  document.getElementById('no-found=phn')
  if(phones.length === 0){
    noPhn.classList.remove('d-none')
  }
  else{
    noPhn.classList.add('d-none')
  }

    phones.forEach(phone => {
        const createDiv = document.createElement('div')
        createDiv.classList.add('col')
        createDiv.innerHTML = `
                     <div class="card p-4">
                        <img src="${phone.image}" class="card-img-top" alt="...">
                        <div class="card-body">
                          <h5 class="card-title">${phone.phone_name}</h5>
                          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                      </div>
        `
        phoneContainer.appendChild(createDiv)
    })
}

document.getElementById('search-btn').addEventListener('click',function(){
   const searchFiled = document.getElementById('search-field') 
   const searchText = searchFiled.value
   loadPhone(searchText)

})

loadPhone()
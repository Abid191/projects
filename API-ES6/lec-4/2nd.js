const loadUser = () =>{
    fetch('https://randomuser.me/api/?gender=female')
    .then(res => res.json())
    .then(data => displayUser(data))
}
const displayUser = user =>{
    const displaygen = document.getElementById('gender')
    displaygen.innerHTML = user.results[0].gender
    const displayName = document.getElementById('name')
    displayName.innerHTML = user.results[0].name.first+' '+user.results[0].name.last
    console.log(user.results[0].name.first)

    displaygen.innerHTML = user.results[0].gender
    console.log(user.results[0].gender)
}

loadUser()
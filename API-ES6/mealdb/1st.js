const loadMeals = (searchText) =>{
    const url = `http://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    console.log(url)
   fetch(url)
   .then(res=>res.json())
   .then(data=>displayMeals(data.meals))

}

const displayMeals = meals =>{
   
    const mealsContainer = document.getElementById('meals-container')
    mealsContainer.innerHTML =''

    meals.forEach(meal =>{
        console.log(meal)
        const mealDiv = document.createElement('div')
        mealDiv.classList.add('col')
        mealDiv.innerHTML = `
        <div class="card h-100">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${meal.strMeal}</h5>
                  <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>

                  <button onClick="loadMealDetail(${meal.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mealDetails">
                  Details
                  </button>

                </div>
              </div>
        `
        mealsContainer.appendChild(mealDiv)
    })
} 

const searchMeals = () =>{
    const searchText = document.getElementById('search-field').value
    console.log(searchText)
    loadMeals(searchText)

}

const loadMealDetail = idMeal =>{
    console.log(idMeal)
    const url = `http://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayMealDetails(data.meals[0]))
}

const displayMealDetails = meal =>{
  document.getElementById('mealDetailsLabel').innerText = meal.strMeal
  const mealDetailsBody = document.getElementById('mealDetailsBody')
  mealDetailsBody.innerHTML =`
  <img class="img-fluid" src="${meal.strMealThumb}" </img>
  `
}

loadMeals('rice')
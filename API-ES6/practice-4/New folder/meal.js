const loadMeal= (searchField) =>{
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchField}`
    fetch(url)
    .then(res => res.json())
    .then(data =>displayMeal(data.meals))
}


const displayMeal = meals =>{
    // console.log(meals)
    const mealContainer = document.getElementById('meal-container')
    mealContainer.innerHTML ='' 


    meals.forEach( meal =>{
       console.log(meal)

    const mealDiv = document.createElement('div')
    mealDiv.classList.add('col')
    mealDiv.innerHTML = `
    <div class="card h-100">
    <img src="${meal.strMealThumb
    }" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${meal.strMeal}</h5>
      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <button onclick="loadMealDetail(${meal.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mealDetails">
  details
</button>
    </div>
  </div>
    ` 
    mealContainer.appendChild(mealDiv)
    })
}

const searchMeals = () =>{
   const searchField = document.getElementById('search-field').value
   console.log(searchField)
   loadMeal(searchField)
}

const loadMealDetail = idMeal =>{
   const url =`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
   fetch(url)
   .then(res=>res.json())
   .then(data=>displayMealDetails(data.meals[0]))
}

const displayMealDetails = meal =>{
document.getElementById('mealDetailsLabel').innerText = meal.strMeal
const mealdetail = document.getElementById('mealDetailsBody')
mealdetail.innerHTML =`
<img class="img-fluid" src="${meal.strMealThumb}">
`
}

loadMeal('fish')
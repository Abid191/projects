const loadMeal = () =>{
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata')
    .then(res=>res.json())
    .then(data=>displayMeals(data.meals))

}
const displayMeals = meals =>{
    const mealContainer = document.getElementById('meal-container')
   meals.forEach(meal =>{
      console.log(meal)

      const mealDiv = document.createElement('div')
      mealDiv.classList.add('A')
      mealDiv.innerHTML = `
      `


      

   })
}
loadMeal()
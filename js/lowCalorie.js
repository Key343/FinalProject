const lowCalList = document.getElementById('low-cal');
const nutritionFacts = document.getElementById('nutrition-btn');
const mealDetailsContent = document.querySelector('.meal-details-content');

lowCalList.addEventListener('click',getNutritionFacts);

function displayLowCalRecipes(){
	fetch("https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes", {
		"method": "GET",
		"headers": {
			"x-rapidapi-key": "6c4a022c7fmshd490f15a0a68071p138ea7jsna0375dcf2db2",
			"x-rapidapi-host": "tasty.p.rapidapi.com"
		}
	})
.then(response => response.json())
.then(data => {
	let html = "";
	
	if(data.results){
		data.results.forEach(recipe => {
            if(recipe.nutrition.calories < 700){

            }else{
			html += `
					 <li class = "recipe-item" data-id = "${recipe.id}">
						<div class = "recipe-img">
							<img src="${recipe.thumbnail_url} "width=250" 
							alt = "food">
						</div>
						<div class = "recipe-name col-sm">
							<h4  style="font-family:'Brush Script MT', cursive;">${recipe.name}</h4>
							<button><a href = "#" class =
							'nutrition-btn'> Get Nutrition</a></button?
						</div>
					<!--	<div class = "recipe-content">
							<button>Get nutrition</button>
						</div>-->
					</li>
			`;}
		});
	}

	lowCalList.innerHTML = html;
});
}
displayLowCalRecipes()
function getNutritionFacts(e){
    e.preventDefault();
    if(e.target.classList.contains('nutrition-btn')){
        let mealItem = e.target.parentElement.parentElement.parentElement;
                fetch(`https://tasty.p.rapidapi.com/recipes/detail?id=${mealItem.id}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "6c4a022c7fmshd490f15a0a68071p138ea7jsna0375dcf2db2",
                "x-rapidapi-host": "tasty.p.rapidapi.com"
            }
        })
            .then(response => response.json())
            .then(data => mealNutritionModel(data.results));
            }
        }
function mealNutritionModel(meal){
    console.log(meal);
    meal = meal[0];
    console.log(meal.name);
        let html = `
                <h2 class="meal-title">${meal.name}</h2>
                    <p class="recipe-description">${meal.description}</p>
                    <div class="nutritions">
                        <h3>Nutritional Facts</h3>
                        <table>
                            <thead>
                                <tr>
                                    <td>Calories</td>
                                    <td>Carbohydrates</td>
                                    <td>Fat</td>
                                    <td>Fiber</td>
                                    <td>Protein</td>
                                    <td>Sugar</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>${meal.nutrition.calories}</td>
                                    <td>${meal.nutrition.carbohyrdrates}</td>
                                    <td>${meal.nutrition.fat}</td>
                                    <td>${meal.nutrition.fiber}</td>
                                    <td>${meal.nutrition.protein}</td>
                                    <td>${meal.nutrition.sugar}</td>
                                </tr>
                            </tbody
                        </table>
                    </div>
            `;
            mealDetailsContent.innerHTML = html;
            mealDetailsContent.parentElement.classList.add('showNutrition');
        }
    




/*const recipeList = document.getElementById('recipe');
function displayAllRecipes(){
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
	let counter = 0;
	if(data.results){
		data.results.forEach(recipe => {
			html += `
					 <li class = "recipe-item" data-id = "${recipe.id} col-sm">
						<div class = "recipe-img">
							<img src="${recipe.thumbnail_url} "width=250" 
							alt = "food">
						</div>
						<div class = "recipe-name col-sm">
							<h4>${recipe.name}</h4>
							<!--<a href = "#" class =
							"recipe-btn> Get Recipe</a> -->
						</div>
						<div class = "recipe-nutrition col-sm">
							<h5>${recipe.nutrition.calories}</h5>
						</div>
					</li>
			`;
		}) ;
	}
	recipeList.innerHTML = html;
});
}
displayAllRecipes()*/

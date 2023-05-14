const recipes = [
    {
      name: "Spaghetti Aglio e Olio",
      ingredients: ["spaghetti", "garlic", "olive oil", "red pepper flakes", "parsley"],
      imgUrl:"imgs/20191011-creamy-tuscan-chicken-delish-ehg-2521-1571259466.jpeg",
      instructions: "\n1. Cook spaghetti according to package instructions. \n2. Heat olive oil in a pan and sauté minced garlic until golden. \n3. Add red pepper flakes and cook for 1-2 minutes. \n4. Drain cooked spaghetti and add it to the pan. \n5. Toss the spaghetti with the garlic and oil mixture. \n6. Garnish with parsley and serve."
    },
    {
      name: "Caprese Salad",
      ingredients: ["tomatoes", "mozzarella cheese", "fresh basil leaves", "balsamic vinegar", "olive oil", "salt", "pepper"],
      imgUrl:"imgs/istockphoto-508345848-170667a.jpeg",
      instructions: " \n1. Slice tomatoes and mozzarella cheese into thick slices. \n2. Arrange tomato and mozzarella slices on a plate. \n3. Place fresh basil leaves between the tomato and mozzarella slices. \n4. Drizzle with balsamic vinegar and olive oil. \n5. Sprinkle with salt and pepper to taste. \n6. Serve immediately."
    },
    {
      name: "Banana Smoothie",
      ingredients: ["banana","spaghetti", "milk", "yogurt", "honey", "ice cubes"],
      imgUrl:"imgs/Banana Smoothie.jpeg",
      instructions: "\n1. Peel and slice a ripe banana. \n2. Place banana slices, milk, yogurt, honey, and ice cubes in a blender. \n3. Blend until smooth and creamy. \n4. Pour into a glass and serve chilled."
    }
  ];
  
  const recipeList = document.getElementById("recipe-list");
  const ingrediensList = document.getElementById("ngrediens-list");
  const inputBox = document.getElementById("input-box");
  const ingredientsItinput=[];
  console.log(ingredientsItinput);
  function filterRecipesByIngredient(ingredientList) {
    const filteredRecipes = recipes.filter(recipe => {
      const recipeIngredients = recipe.ingredients.map(item => item.toLowerCase());
      return ingredientList.every(ingredient => recipeIngredients.includes(ingredient.toLowerCase()));
    });
  
    return filteredRecipes;
  }
 function getRecipe(){

    if(ingredientsItinput.length=== 0){
        alert("you must Add ingredients");
    }
    else{
    
    displayRecipes(filterRecipesByIngredient(ingredientsItinput));
    }

 }
 function displayIngredients(ingredientsArray) {
    const ingredientsList = document.getElementById("ingredients-list");
    ingredientsList.innerHTML = "";
  
    ingredientsArray.forEach(ingredient => {
      const span = document.createElement("span");
      span.className = "ingredient-item";
      span.innerHTML=`<div class="tag">
      ${ingredient}
      </div>`;
      ingredientsList.appendChild(span);
    });
  }
 
function addIngrediens(){
    if(inputBox.value==''){
        alert("you must write somthing");
    }
    else{
        
        ingredientsItinput.push(inputBox.value);
        inputBox.value='';
        displayIngredients(ingredientsItinput);

        console.log(ingredientsItinput);
    }
   
}

function displayRecipes(recipesArray) {
    recipeList.innerHTML = "";
    recipesArray.forEach((recipe) => {
      const listItem = document.createElement("li");
      listItem.className = "recipe-item";
      listItem.innerHTML = `
        <div class="recipe-image">
          <img src="${recipe.imgUrl}" alt="${recipe.name}">
        </div>
        <div class="recipe-details">
          <h3 class="recipe-name">${recipe.name}</h3>
          <p class="recipe-ingredients"><strong>Ingredients:</strong> ${recipe.ingredients.join(", ")}</p>
          <p class="recipe-instructions"><strong>Instructions:</strong> ${recipe.instructions}</p>
        </div>
      `;
      recipeList.appendChild(listItem);
    });
  }
   
 
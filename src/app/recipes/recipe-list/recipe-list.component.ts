import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../recipe.model';
 
@Component({
	selector: 'app-recipe-list',
	templateUrl: './recipe-list.component.html',
	styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
	@Output() chonRecipe = new EventEmitter<Recipe>();

	// 'Recipe[]': cho Typescript biết đây là 1 mảng các obj Recipe
	recipes: Recipe[] = [
		new Recipe('A Test Recipe 1', 'This is simply a test', 
			'https://c.pxhere.com/photos/8b/0f/food_meat_recipe_power_pork_dishes-604134.jpg!d'),
		new Recipe('A Test Recipe 2', 'This is simply a test', 
			'https://www.maxpixel.net/static/photo/1x/Mushrooms-Recipe-Kitchen-French-Dish-2459679.jpg'),
	];

	constructor() { 
	}

	ngOnInit() {
	}

	recipeSelectedHandle(recipe: Recipe) {
		this.chonRecipe.emit(recipe);
	}

}

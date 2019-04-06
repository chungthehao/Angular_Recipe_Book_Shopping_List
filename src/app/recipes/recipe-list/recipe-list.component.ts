import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
 
@Component({
	selector: 'app-recipe-list',
	templateUrl: './recipe-list.component.html',
	styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
	@Output() chonRecipe = new EventEmitter<Recipe>();

	// 'Recipe[]': cho Typescript biết đây là 1 mảng các obj Recipe
	recipes: Recipe[];

	constructor(private recipeService: RecipeService) { 
	}

	ngOnInit() {
		this.recipes = this.recipeService.getRecipes();
	}

	recipeSelectedHandle(recipe: Recipe) {
		this.chonRecipe.emit(recipe);
	}

}

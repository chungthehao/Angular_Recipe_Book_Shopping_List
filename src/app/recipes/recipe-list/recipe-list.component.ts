import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
 
@Component({
	selector: 'app-recipe-list',
	templateUrl: './recipe-list.component.html',
	styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

	// 'Recipe[]': cho Typescript biết đây là 1 mảng các obj Recipe
	recipes: Recipe[];

	constructor(private recipeService: RecipeService) { 
	}

	ngOnInit() {
		this.recipes = this.recipeService.getRecipes();
	}

}

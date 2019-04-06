import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>(); // It will hold some Recipe data

    // 'Recipe[]': cho Typescript biết đây là 1 mảng các obj Recipe
	private recipes: Recipe[] = [
		new Recipe(
            'A Test Recipe 1', 
            'This is simply a test', 
            'https://c.pxhere.com/photos/8b/0f/food_meat_recipe_power_pork_dishes-604134.jpg!d',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 20),
            ]),
            
            
		new Recipe(
            'A Test Recipe 2', 
            'This is simply a test', 
            'https://www.maxpixel.net/static/photo/1x/Mushrooms-Recipe-Kitchen-French-Dish-2459679.jpg',
            [
                new Ingredient('Buns', 2),
                new Ingredient('Onion', 10)
            ]),
    ];
    
    constructor(private shoppingListService: ShoppingListService) {}

    getRecipes() {
        /**
         * - Make sure we only get a copy
         * - Nếu ko có slice() thì sẽ trả về là địa chỉ reference tới cái private luôn
         * - Dùng slice để tạo ra 1 copy khác
         * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
         */
        return this.recipes.slice(); 
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);

        // ingredients.forEach(
        //     (ingredient) => {
        //         this.shoppingListService.addIngredient(ingredient); // A lot of unnecessary event emissions!!
        //     }
        // );
    }

}
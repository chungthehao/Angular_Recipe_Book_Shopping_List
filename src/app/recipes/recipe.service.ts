import { Recipe } from './recipe.model';

export class RecipeService {

    // 'Recipe[]': cho Typescript biết đây là 1 mảng các obj Recipe
	private recipes: Recipe[] = [
		new Recipe('A Test Recipe 1', 'This is simply a test', 
			'https://c.pxhere.com/photos/8b/0f/food_meat_recipe_power_pork_dishes-604134.jpg!d'),
		new Recipe('A Test Recipe 2', 'This is simply a test', 
			'https://www.maxpixel.net/static/photo/1x/Mushrooms-Recipe-Kitchen-French-Dish-2459679.jpg'),
	];

    getRecipes() {
        /**
         * - Make sure we only get a copy
         * - Nếu ko có slice() thì sẽ trả về là địa chỉ reference tới cái private luôn
         * - Dùng slice để tạo ra 1 copy khác
         * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
         */
        return this.recipes.slice(); 
    }

}
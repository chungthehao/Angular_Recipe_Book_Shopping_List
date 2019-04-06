import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
	@ViewChild('amountInput') amountInputRef: ElementRef; 

	constructor(private shoppingListService: ShoppingListService) { }

	ngOnInit() {
	}

	addIngredient(name: string) {
		const newIngredient = new Ingredient(name, this.amountInputRef.nativeElement.value);
		
		this.shoppingListService.addIngredient(newIngredient);

		// console.log(nameInput.value)
		// console.log(this.amountInputRef.nativeElement.value)
	}

}


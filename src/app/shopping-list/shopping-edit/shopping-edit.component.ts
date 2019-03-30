import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
	@Output() ingredientAdded = new EventEmitter<Ingredient>();
	@ViewChild('amountInput') amountInputRef: ElementRef; 

	constructor() { }

	ngOnInit() {
	}

	addIngredient(name) {
		this.ingredientAdded.emit(
			new Ingredient(name, this.amountInputRef.nativeElement.value)
		);

		// console.log(nameInput.value)
		// console.log(this.amountInputRef.nativeElement.value)
	}

}

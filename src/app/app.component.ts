import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	// 1: Recipe book
	// 2: Shopping list
	status: number = 1;
  
	menuClicked(menuCode: number) {
		this.status = menuCode;
	}
}

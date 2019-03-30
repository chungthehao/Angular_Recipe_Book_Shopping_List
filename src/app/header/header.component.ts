import { Component, EventEmitter, Output } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})

export class HeaderComponent {
	@Output() clickMenu = new EventEmitter<number>();

	onClickMenu(menuCode: number) {
		this.clickMenu.emit(menuCode);
	}
}
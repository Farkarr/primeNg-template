import { Component, OnInit } from '@angular/core';
import { MegaMenuItem } from 'primeng/api';

@Component({
	selector: 'app-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

	public menuItems: MegaMenuItem[] = [];

	constructor() { }

	
	ngOnInit(): void {
		this.initMenu();
	}
	
	private initMenu(){
		this.menuItems = [
			{
				label: 'Chanclas',
				routerLink: ["/chanclas"]
			}
		]
	}
}

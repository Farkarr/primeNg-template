import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ChanclaService } from 'src/app/services/chancla/chancla.service';

@Component({
	selector: 'app-chancla',
	templateUrl: './chancla.component.html',
	styleUrls: ['./chancla.component.scss']
})
export class ChanclaComponent implements OnInit {

	public chanclas: Product[] = [];

	constructor(private _ChanclaService: ChanclaService) { }

	ngOnInit(): void {
		this.getChanclas();
	}

	private getChanclas(){
		this._ChanclaService.getChanclas()
		.then(res => this.chanclas = res)
		.catch(err => console.log(err))
	}

}

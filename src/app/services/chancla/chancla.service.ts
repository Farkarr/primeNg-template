import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';

@Injectable({
	providedIn: 'root'
})
export class ChanclaService {

	constructor(private __HttpService: HttpService) { }

	public getChanclas(): Promise<any>{
		const request = `chanclas`;
		const promise = new Promise((resolve, reject) => {
			this.__HttpService.Get(request)
			.then(res => resolve(res))
			.catch(err => reject(err));
		});
		return promise;
	}
}

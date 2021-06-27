import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API } from 'src/app/constants/Api';

@Injectable({
	providedIn: 'root'
})
export class HttpService {
	private headers: HttpHeaders;
	private URL: string;
	
	constructor(private _http: HttpClient) { 
		this.URL = API.URL;
		this.headers = new HttpHeaders();
		this.setHeaders();
	}
	
	private setHeaders(): void{
		this.headers.set("Content-Type", "application/json");
	}

	public Get(request: string): Promise<any>{
		return this._http.get(this.URL + request, {headers: this.headers}).toPromise();
	}
	
	public Post(request: string, data: any): Promise<any>{
		return this._http.post(this.URL + request, data, {headers: this.headers}).toPromise();
	}
	
	public Delete(request: string): Promise<any>{
		return this._http.delete(this.URL + request, {headers: this.headers}).toPromise();
	}

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url = "https://run.mocky.io/v3/945ebc53-6e6c-458f-a54d-78c637ac6d54";

  constructor( private httpClient: HttpClient) { }

  getProducts(){
    return this.httpClient.get(this.url);
  }

}

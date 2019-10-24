import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import {environment} from '../environments/environment';
import { Product } from './models/product';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  constructor(private httpClient:HttpClient) { }

  public getCharacters(): Observable<Product[]>{    
    return this.httpClient.get<Product[]>(environment.backendClient);
  }
  
  public getColumns(): string[]{
    return ["#", "Nom", "Matière", "Prix"];
  }
}

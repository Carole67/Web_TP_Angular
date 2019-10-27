import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../environments/environment';
import { Product } from './models/product';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  constructor(private httpClient: HttpClient) { }

  // get products from JSON file
  public getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(environment.backendClient);
  }

  // get columns name
  public getColumns(): string[] {
    return ["#", "Nom", "Matière", "Prix"];
  }
}

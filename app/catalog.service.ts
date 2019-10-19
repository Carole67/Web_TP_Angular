import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import { CHARACTERS } from './mock-data';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  constructor() { }

  public getCharacters(): Observable<any[]>{
    return Observable.of(CHARACTERS).delay(100);
  }
  
  public getColumns(): string[]{
    return ["Nom", "Prix"];
  }
}

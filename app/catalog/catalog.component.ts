import { Component, OnInit, OnDestroy } from '@angular/core';
import { CatalogService } from '../catalog.service';
import { Product } from '../models/product';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  // subscriber to listen or not 
  private _subscriber;

  // columns names
  columns: string[];
  //products
  products: Product[];

  // value from user
  inputFiltre: string = "";
  // kind of filter selected 
  type: string = "";

  constructor(private service: CatalogService) { }

  ngOnInit() {
    // get columns value
    this.columns = this.service.getColumns();
    // get products value
    this._subscriber = this.service.getProducts().subscribe(value => this.products = value);
  }

  // set value of category when it has changed
  public updateCategory(type: string) {
    this.type = type;
  }

  // set value of input value when it has changed
  public updateFilter(filte: string) {
    this.inputFiltre = filte;
  }

  // Stop listening 
  ngOnDestroy(): void {
    this._subscriber.unsubscribe();
  }
}

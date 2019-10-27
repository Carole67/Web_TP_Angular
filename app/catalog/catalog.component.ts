import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { CatalogService } from '../catalog.service';
import { Product } from '../models/product';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  // columns names
  columns: string[];
  //products
  products: Product[];

  inputFiltre : string = "";
  type : string = "";

  constructor(private service: CatalogService) { }

  ngOnInit() {
    this.columns = this.service.getColumns();

    this.service.getProducts().subscribe(value => this.products = value);
  }

  public majType(type: string) {
    this.type = type;
  }

  public majFiltre(filte: string) {
    this.inputFiltre = filte;
  }
}

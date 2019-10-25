import { Component, OnInit } from '@angular/core';
import { CatalogService } from '../catalog.service';
import { Observable, combineLatest } from 'rxjs';
import { Product } from '../models/product';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  // product values from JSON
  products: Observable<Product[]>;
  // filtered products
  filteredProducts: Observable<Product[]>;
  // columns names
  columns: string[];
  // user filter data
  filter: FormControl;
  // listening to changes 
  filter$: Observable<string>;

  constructor(private catalogService: CatalogService) {
    this.products = this.catalogService.getProducts();
    this.filter = new FormControl('');
    this.filter$ = this.filter.valueChanges.pipe(startWith(''));
    this.filteredProducts = combineLatest(this.products, this.filter$).pipe(
      map(([products, filterString]) => products.filter(ch =>   
            ch.name.toLowerCase().indexOf(filterString) !== -1
            || ch.material.toLowerCase().indexOf(filterString) !== -1
            || ch.price.toLowerCase().indexOf(filterString) !== -1
      ))
    );
  }

  ngOnInit() {
    // get column names
    this.columns = this.catalogService.getColumns();
    // get all data in mock-data.ts
    this.products = this.catalogService.getProducts();
  }
}
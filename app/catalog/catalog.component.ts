import { Component, OnInit, PipeTransform } from '@angular/core';
import { CatalogService } from '../catalog.service';
import { Observable, combineLatest } from 'rxjs';
import { Product } from '../models/product';
import { DecimalPipe } from '@angular/common';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
  providers: [DecimalPipe]
})
export class CatalogComponent implements OnInit {

  characters: Observable<Product[]>;
  filteredCharacters: Observable<Product[]>;
  columns: string[];
  filter: FormControl;
  filter$: Observable<string>;

  constructor(private catalogService: CatalogService) {
    this.characters = this.catalogService.getCharacters();
    this.filter = new FormControl('');
    this.filter$ = this.filter.valueChanges.pipe(startWith(''));
    this.filteredCharacters = combineLatest(this.characters, this.filter$).pipe(
      map(([characters, filterString]) => characters.filter(ch =>   
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
    this.characters = this.catalogService.getCharacters();
  }
}
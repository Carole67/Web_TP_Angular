import { Component, OnInit } from '@angular/core';
import { CatalogService } from '../catalog.service';
import { Observable } from 'rxjs';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  characters: Observable<ProductComponent[]>;
  columns: string[];

  constructor(private catalogService:CatalogService) { }

  ngOnInit() {
    // get column names
    this.columns = this.catalogService.getColumns();
    // get all data in mock-data.ts
    this.characters = this.catalogService.getCharacters();
  }

}

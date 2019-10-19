import { Component, OnInit } from '@angular/core';
import { CatalogService } from '../catalog.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  characters: Observable<any[]>;
  columns: string[];

  constructor(private catalog:CatalogService) { }

  ngOnInit() {
    // get column names
    this.columns = this.catalog.getColumns();
    // get all data in mock-data.ts
    this.characters = this.catalog.getCharacters();
  }

}

import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})

export class ProductFilterComponent implements OnInit {

  constructor() { }

  @Output() changeFiltre: EventEmitter<string> = new EventEmitter<string>();
  @Output() changeType: EventEmitter<string> = new EventEmitter<string>();
  inputFiltre: string = "";
  type: string = "";

  ngOnInit() {
  }

  notifyParent() {
    this.changeType.emit(this.type);
    this.changeFiltre.emit(this.inputFiltre);
  }
}

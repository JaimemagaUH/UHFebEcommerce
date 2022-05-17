import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProduct } from '../../../../core/services/products/models/product.models';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() public product?: IProduct;
  @Input() public canDelete: boolean = false;
  @Output() public delete: EventEmitter<void> = new EventEmitter();

  public isSelected: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public onDelete() {
    this.delete.emit();
  }

  public onClick() {
    this.isSelected = !this.isSelected;
  }

}

import { Component, OnInit } from '@angular/core';
import { IProduct } from './models/product.models';
import { products } from './product-list.config';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  public products: IProduct[] = products as IProduct[];
  public filteredProducts: IProduct[] = this.products;
  public canModify: boolean = false;
  public filterValue: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  public onModify() {
    this.canModify = !this.canModify;
  }

  public onDelete(id: string) {
    this.products = this.products.filter(product => product.id !== id);
    this.filterValue = "eliminado";
  }

  public onFilter() {
    this.filteredProducts = this.products.filter(product => {
      return product.name.toLowerCase().includes(this.filterValue.toLowerCase());
    });
  }

}

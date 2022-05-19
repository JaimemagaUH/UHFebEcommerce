import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../core/services/products/models/product.models';
import { products } from './product-list.config';
import { dollarToEur } from 'src/app/core/utils/money.helpers';
import { MessageService } from 'src/app/core/services/message/message.service';
import { ProductsService } from 'src/app/core/services/products/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  public products?: IProduct[];
  public canModify: boolean = false;
  public filterValue: string = "";
  public message: string = '';

  constructor(
    private messageService: MessageService,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.getProducts();
  }

  public onModify() {
    this.canModify = !this.canModify;
  }

  /**
   * Esta función elimina de la lista de productos el producto cuyo id haya sido recibido como argumento.
   * 
   * @param id Id del producto que se quiere eliminar.
   */
  public onDelete(id: string) {
    this.productsService.deleteProduct(id).subscribe((product) => {
      console.log('Eliminado!', product);
      this.getProducts();
    });
  }

  public sendMessage() {
    this.messageService.setMessage(this.message);
    this.message = '';
  }

  private getProducts() {
    this.productsService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }

}

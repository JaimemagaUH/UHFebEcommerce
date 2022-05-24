import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../core/services/products/models/product.models';
import { products } from './product-list.config';
import { dollarToEur } from 'src/app/core/utils/money.helpers';
import { MessageService } from 'src/app/core/services/message/message.service';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { PaginationService } from 'src/app/core/services/pagination.service';
import { ActivatedRoute } from '@angular/router';

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
  public sortCriteria: boolean = true;
  public page: number = 0;
  public maxPage: number = 0;

  constructor(
    private messageService: MessageService,
    private productsService: ProductsService,
    private paginationService: PaginationService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.products = this.activatedRoute.snapshot.data[0];
    this.paginationService.maxPage$.subscribe(page => {
      this.maxPage = page;
    });
  }

  public onModify() {
    this.canModify = !this.canModify;
  }

  public changeSortCriteria() {
    this.sortCriteria = !this.sortCriteria;
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

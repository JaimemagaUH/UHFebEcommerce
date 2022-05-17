import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { IProduct } from '../../core/services/products/models/product.models';
import { products } from '../product-list/product-list.config';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  public currentProduct$?: Observable<IProduct>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductsService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const productId = params['productId'];
      this.currentProduct$ = this.productService.getProductById(productId);
    });
  }

}

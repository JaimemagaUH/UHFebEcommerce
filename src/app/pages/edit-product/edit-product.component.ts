import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { IProduct } from 'src/app/core/services/products/models/product.models';
import { ProductsService } from 'src/app/core/services/products/products.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  // public product$?: Observable<IProduct>;
  public product?: IProduct;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    // this.product$ = this.activatedRoute.params.pipe(
    //   switchMap((params) => {
    //     const productId = params['productId'];
    //     return this.productsService.getProductById(productId);
    //   })
    // );

    this.activatedRoute.params.subscribe((params) => {
      const productId = params['productId'];
      this.productsService.getProductById(productId).subscribe((product) => {
        this.product = product;
      });
    });

  }

}

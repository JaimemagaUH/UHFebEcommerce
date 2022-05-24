import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { IProduct } from '../services/products/models/product.models';
import { ProductsService } from '../services/products/products.service';

@Injectable({
  providedIn: 'root'
})
export class RequestResolver implements Resolve<IProduct[]> {

  constructor(private productService: ProductsService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IProduct[]> {
    return this.productService.getProducts();
  };
}

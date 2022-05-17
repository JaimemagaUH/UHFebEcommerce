import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { IProduct } from './models/product.models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  public juan: Subject<string> = new Subject();

  constructor(private httpClient: HttpClient) {
  }

  public getProducts(): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(`${environment.apiUrl}products`);
  }

  public getProductById(productId: string): Observable<IProduct> {
    return this.httpClient.get<IProduct>(`${environment.apiUrl}products/${productId}`);
  }

  public addProduct(body: IProduct): Observable<IProduct> {
    return this.httpClient.post<IProduct>(
      `${environment.apiUrl}products`,
      body
    );
  }

  public editProduct(idProduct: string, body: IProduct): Observable<IProduct> {
    return this.httpClient.put<IProduct>(
      `${environment.apiUrl}products/${idProduct}`,
      body
    );
  }

  public deleteProduct(idProduct: string): Observable<IProduct> {
    return this.httpClient.delete<IProduct>( `${environment.apiUrl}products/${idProduct}`);
  }
}

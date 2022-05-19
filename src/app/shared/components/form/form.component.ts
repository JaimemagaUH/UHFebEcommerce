import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IProduct, ProductMaterial } from 'src/app/core/services/products/models/product.models';
import { ProductsService } from 'src/app/core/services/products/products.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Input() public product?: IProduct;
  @Input() public editMode: boolean = false;

  public productForm?: FormGroup;
  public materials: string[] = Object.values(ProductMaterial);

  constructor(
    private fb: FormBuilder,
    private productsService: ProductsService,
    private router: Router
  ) {}

  public ngOnInit(): void {
    this.productForm = this.fb.group({
      name: new FormControl(this.product ? this.product.name : '', [Validators.required]),
      color: new FormControl(this.product ? this.product.color : '', [Validators.required]),
      price: new FormControl(this.product ? this.product.price : '', [Validators.required, Validators.maxLength(8)]),
      description: new FormControl(this.product ? this.product.description :''),
      image: new FormControl(this.product ? this.product.image : '', [Validators.required]),
      materials: new FormControl(this.product ? this.product.materials : '', [Validators.required])
    });
  }

  public saveProduct() {
    const formValue = this.productForm?.value;
    const productAdd$ = this.editMode && this.product
    ? this.productsService.editProduct(this.product.id, formValue)
    : this.productsService.addProduct(formValue);
    productAdd$.subscribe((product) => {
      this.router.navigate(['/product-list']);
    });
  }

}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('src/app/pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: "product-list",
    loadChildren: () => import('src/app/pages/product-list/product-list.module').then(m => m.ProductListModule)
  },
  {
    path: 'detail/:productId',
    loadChildren: () => import('src/app/pages/product-detail/product-detail.module').then(m => m.ProductDetailModule)
  },
  {
    path: 'create-product',
    loadChildren: () => import('src/app/pages/create-product/create-product.module').then(m => m.CreateProductModule)
  },
  {
    path: 'edit-product/:productId',
    loadChildren: () => import('src/app/pages/edit-product/edit-product.module').then(m => m.EditProductModule)
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

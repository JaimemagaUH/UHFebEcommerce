import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { ExitGuard } from './core/guards/exit.guard';
import { RequestResolver } from './core/resolvers/request.resolver';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('src/app/pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: "product-list",
    loadChildren: () => import('src/app/pages/product-list/product-list.module').then(m => m.ProductListModule),
    resolve: [RequestResolver]
  },
  {
    path: 'detail/:productId',
    loadChildren: () => import('src/app/pages/product-detail/product-detail.module').then(m => m.ProductDetailModule)
  },
  {
    path: 'create-product',
    loadChildren: () => import('src/app/pages/create-product/create-product.module').then(m => m.CreateProductModule),
    canDeactivate: [ExitGuard]
  },
  {
    path: 'edit-product/:productId',
    loadChildren: () => import('src/app/pages/edit-product/edit-product.module').then(m => m.EditProductModule)
  },
  {
    path: 'my-account',
    loadChildren: () => import('src/app/pages/my-account/my-account.module').then(m => m.MyAccountModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('src/app/pages/login/login.module').then(m => m.LoginModule),
    canDeactivate: [ExitGuard]
  },
  {
    path: 'register',
    loadChildren: () => import('src/app/pages/register/register.module').then(m => m.RegisterModule),
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

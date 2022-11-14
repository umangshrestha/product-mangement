import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { IDGaurd } from './shared/gaurd/id.gaurd';

const routes: Routes = [{
  path: 'products',
  component: ProductListComponent,
  title: "Product List"
}, {
  path: 'products/:id',
  canActivate: [IDGaurd],
  component: ProductDetailComponent,
  title: "Product"
}, {
  path: '',
  redirectTo: "products",
  pathMatch: 'full'
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

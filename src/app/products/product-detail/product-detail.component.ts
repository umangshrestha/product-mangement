import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../entity/product.entity';
import { ProductsService as Service } from '../products.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
})
export class ProductDetailComponent implements OnInit {

  title = "Product"
  pageTitle = 'Product Detail';
  errorMsg?: string;
  product?: IProduct;

  constructor(private route: ActivatedRoute,
    private service: Service,
    private location: Location) {
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.service.getProduct(id).subscribe({
      next: product => this.product = product,
      error: err => this.errorMsg = err
    });
  }

  onBack(): void {
    this.location.back();
  }

}

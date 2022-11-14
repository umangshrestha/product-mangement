import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../entity/product.entity';
import { ProductsService as Service } from '../products.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {

  title = "Product"
  pageTitle = 'Product Detail';
  errorMsg?: string;
  product?: IProduct;

  private id = 0;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private service: Service,
    private location: Location) {
  }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.service.findone(this.id).subscribe({
      next: product => this.product = product,
      error: err => this.errorMsg = err
    });
  }

  onBack(): void {
    this.location.back();
  }

  onDelete(): void {
    this.service.remove(this.id).subscribe({
      next: _ => this.router.navigate(['/products']),
      error: err => this.errorMsg = err
    });
  }

}

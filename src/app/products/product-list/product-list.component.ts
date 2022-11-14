import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IProduct } from '../entity/product.entity';
import { ProductsService as Service } from "../products.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['../product.component.scss'],
})
export class ProductListComponent implements OnInit {

  constructor(private service: Service) { }

  title = "Products list"
  showImage = false;
  errorMsg?: string;
  sub!: Subscription;

  filteredProducts: IProduct[] = [];
  products: IProduct[] = []

  private _listFilter = '';

  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.performFilter(value);
  }

  convertToSpaces(data: string, delimiter: string) {
    return data.replace(" ", delimiter);
  }
  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter(({ name }: IProduct) => name.toLocaleLowerCase().includes(filterBy));
  }

  ngOnInit(): void {
    this.sub = this.service.findall().subscribe({
      next: (products: IProduct[]) => {
        this.products = this.filteredProducts = products
      },
      error: (err: any) => {
        this.errorMsg = err
      }
    })
  }

  ngOnDestroy(): void { this.sub.unsubscribe(); }
}

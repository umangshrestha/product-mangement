import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { StarRatingComponent } from "./star-rating/star-rating.component";



@NgModule({
    declarations: [
        ProductListComponent,
        ProductDetailComponent,
        StarRatingComponent,
    ],
    imports: [
        HttpClientModule,
        FormsModule,
        RouterModule,
        CommonModule,
    ]
})
export class ProductsModule { }
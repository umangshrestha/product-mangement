import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { StarRatingModule } from "../star-rating/start-rating.module";



@NgModule({
    declarations: [
        ProductListComponent,
        ProductDetailComponent,
    ],
    imports: [
        HttpClientModule,
        FormsModule,
        RouterModule,
        CommonModule,
        StarRatingModule
    ]
})
export class ProductsModule { }
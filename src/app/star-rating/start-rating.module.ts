import { NgModule } from "@angular/core";
import { StarRatingComponent } from "./star-rating.component";

@NgModule({
    declarations: [
        StarRatingComponent,
    ],
    exports: [
        StarRatingComponent,
    ]
})
export class StarRatingModule{}
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsModule } from './products/products.module';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data/in-memory-data.service';
import { ConvertToSpaces } from './shared/pipe/convert-to-spaces.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ConvertToSpaces
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductsModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, tap, throwError, map } from "rxjs";

import { IProduct } from "./entity/product.entity";

@Injectable({
    providedIn: 'root'
})
export class ProductsService {

    constructor(private http: HttpClient) { }
    private productUrl = "/api/products"

    findall() {
        return this.http.get<IProduct[]>(this.productUrl)
            .pipe(catchError(this.handleError))
    }

    findone(id: number) {
        return this.http.get<IProduct>(`${this.productUrl}/${id}`)
            .pipe(catchError(this.handleError))

    }

    remove(id: number) {
        return this.http.delete<IProduct>(`${this.productUrl}/${id}`)
            .pipe(catchError(this.handleError))
    }

    private handleError(err: HttpErrorResponse): Observable<never> {
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            errorMessage = `An error occurred: ${err.error.message}`;
        } else {
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        return throwError(() => errorMessage);
    }
}
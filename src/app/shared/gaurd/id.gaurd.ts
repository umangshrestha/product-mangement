import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";


type IReturn = boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree>

@Injectable({
    providedIn: "root"
})
export class IDGaurd implements CanActivate {
    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): IReturn {
        const id = Number(route.paramMap.get('id'));
        if (isNaN(id) || id < -1) {
            this.router.navigate(['/products'])
            return false
        }
        return true
    }
}
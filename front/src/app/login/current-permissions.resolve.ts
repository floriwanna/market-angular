// import { LoginService } from './login.service';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Injectable } from '@angular/core';
import { LoginBackofficeServiceService } from "./login-backoffice-service.service";

@Injectable()
export class CurrentPermissionResolve implements Resolve<string[]> {
    constructor(private loginService: LoginBackofficeServiceService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<string[]> {
        return this.loginService.getCurrentPermissions();
    }

}
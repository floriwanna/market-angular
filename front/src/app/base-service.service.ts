import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class BaseService {
    constructor() { }
    public baseUrl = "/api/admin/product";
    public header = {
        headers: { authorization: 'DSD'/* this.loginService.token */ },
    };

}
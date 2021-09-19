import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/base-service.service';
import { inherits } from 'util';

@Injectable({
  providedIn: 'root'
})
export class ProductBackService extends BaseService {

  constructor(private http: HttpClient) {
    super();
  }


  public getListProduct(): Promise<any> {
    return this.http.get(`${this.baseUrl}/list`, this.header).toPromise();
  }
}

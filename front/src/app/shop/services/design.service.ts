import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Banner, BannerType } from '../model/banner';

@Injectable()
export class DesignService {

  constructor(private http: HttpClient) { }

  public getBannerProperties() {
    return { visible: true }
  }

  public getBannerValues(): Banner[] {
    return [
      { type: BannerType.Image, value: '' } as Banner,
      { type: BannerType.Text, value: 'Banner text' } as Banner,
    ]
  }
}

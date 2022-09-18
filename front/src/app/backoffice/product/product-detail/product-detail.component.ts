import { HttpClient, HttpSentEvent } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  constructor(private http: HttpClient) { }

  product = {
    name: new FormControl(''),
    unit_price: new FormControl(''),
    descripcion: new FormControl('')
  }

  ngOnInit(): void {
  }

  
  public processFile(image: any) {
    
    const file = image.files[0];
    const reader = new FileReader();
    
    
    reader.addEventListener('load', (event: any) => {
      
      let formData = new FormData();
      formData.append('image', file);
      console.log(formData);
      this.http.post('http://localhost:3000/admin/products/image', formData).subscribe(
        (res) => {
          console.log("ok")
        },
        (err) => {
          console.error("EERRRR")

        })
    });

    reader.readAsDataURL(file);
   
  }
}

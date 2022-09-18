import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flori-test',
  templateUrl: './flori-test.component.html',
  styleUrls: ['./flori-test.component.scss']
})
export class FloriTestComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  public uploadFile(file: any) {

    
    const fileData = file.files[0];
    
    const reader = new FileReader();
    reader.addEventListener('load', (event: any) => {
      
      console.log('addEventListener');
      // console.log(event, 'event');
      // console.log(reader.result,'reader.result');
    
      const formData = new FormData();
      formData.append('image', fileData);
      this.http.post('http://localhost:3000/image', formData, {
        headers: {
        'Content-Type': 'multipart/form-data'
      } }).subscribe(
        (res) => {
        console.log(res,'res')
        },
        (err) => {
          console.error(err,'err')
        
        })
    });

    reader.readAsDataURL(fileData);
   }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router) { }


  ngOnInit(): void {

    const heroId = this.route.snapshot.paramMap.get('id');
    this.title = heroId;
    // this.route.paramMap.pipe(
    //   switchMap(params => {
    //     this.selectedId = Number(params.get('id'));
    //     // return this.service.getHeroes();
    //   })
    // );
  }
  selectedId;
  title = "gatos"
}

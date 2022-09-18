import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductAdminRoutes } from './product-admin.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductLinearListComponent } from './product-linear-list/product-linear-list.component';
import { RouterModule } from '@angular/router';
import { ProductComponent } from './product.component';
import { ProductBackService } from './product-back.service';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    ProductLinearListComponent,
    ProductComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(ProductAdminRoutes), RouterModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    // MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    // MatMenuModule
  ],
  providers: [ProductBackService],
})
export class ProductBackModule { }

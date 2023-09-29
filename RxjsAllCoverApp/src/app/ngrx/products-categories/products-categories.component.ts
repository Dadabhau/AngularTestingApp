import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/appservices/products.service';

@Component({
  selector: 'app-products-categories',
  templateUrl: './products-categories.component.html',
  styleUrls: ['./products-categories.component.scss'],
})
export class ProductsCategoriesComponent implements OnInit {
  allcategories: any;
  constructor(private _productservice: ProductsService) {}
  ngOnInit(): void {
    this._productservice.getAllProductCategories().subscribe((res) => {
      console.log(res);
      this.allcategories = res;
    });
  }
}

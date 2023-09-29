import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/appservices/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  allProduct: any;
  constructor(private _products: ProductsService) {}
  ngOnInit(): void {
    this._products.getAllProductList().subscribe((res) => {
      console.log(res);
      this.allProduct = res;
    });
  }
}

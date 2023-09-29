import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getAllProductList() {
    return this.http.get('https://fakestoreapi.com/products');
  }

  getAllProductCategories() {
    return this.http.get('https://fakestoreapi.com/products/categories');
  }
  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>('https://fakestoreapi.com/users');
  }
}

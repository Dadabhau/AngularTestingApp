import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MyservicesService {
  constructor(private http: HttpClient) {}

  getAllData() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
}

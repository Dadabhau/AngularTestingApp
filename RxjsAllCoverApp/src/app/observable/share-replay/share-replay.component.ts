import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, map, shareReplay, take } from 'rxjs';

@Component({
  selector: 'app-share-replay',
  templateUrl: './share-replay.component.html',
  styleUrls: ['./share-replay.component.scss'],
})
export class ShareReplayComponent implements OnInit {
  url = 'https://fakestoreapi.com/products';
  products: Observable<any>;
  mens: Observable<any>;
  womens: Observable<any>;

  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.products = this.http.get(this.url).pipe(shareReplay());
    this.mens = this.products.pipe(
      map((res) =>
        res.filter((mens: any) => {
          return mens['category'] == "men's clothing";
        })
      )
    );
    this.womens = this.products.pipe(
      map((res) =>
        res.filter((womens: any) => {
          return womens['category'] == "women's clothing";
        })
      )
    );
  }
}

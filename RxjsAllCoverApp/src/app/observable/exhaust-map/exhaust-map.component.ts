import { HttpClient } from '@angular/common/http';
import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { exhaustMap, fromEvent, tap } from 'rxjs';
import { DesignUlilityService } from 'src/app/appservices/design-ulility.service';

@Component({
  selector: 'app-exhaust-map',
  templateUrl: './exhaust-map.component.html',
  styleUrls: ['./exhaust-map.component.scss'],
})
export class ExhaustMapComponent implements OnInit, AfterViewInit {
  @ViewChild('btn') btn: ElementRef;
  num: number = 0;
  saverequest: any;
  fetching: boolean = false;
  error: any;
  url = 'https://global-1bb0f.firebaseio.com/exhaustMap.json';

  constructor(private _ui: DesignUlilityService, private http: HttpClient) {}

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    fromEvent(this.btn.nativeElement, 'click')
      .pipe(
        tap(() => (this.fetching = true)),
        exhaustMap(() => this.onSave(this.num++))
      )
      .subscribe(
        (res) => {
          console.log(res);
          this.onfetch();
          this.fetching = false;
        },
        (error) => {
          console.log(error);
          this.error = error.message;
          this.fetching = false;
        }
      );
  }
  onSave(changes: any) {
    return this.http.put(this.url, { data: changes });
  }
  btnClick() {
    this.onSave(this.num++).subscribe((res) => {
      console.log(res);
    });
  }
  onfetch() {
    this.http.get(this.url).subscribe((res) => {
      console.log(res);
      this.saverequest = res;
    });
  }
}

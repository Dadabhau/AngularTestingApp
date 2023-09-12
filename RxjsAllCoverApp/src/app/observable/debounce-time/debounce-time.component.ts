import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { debounceTime, distinctUntilChanged, fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-debounce-time',
  templateUrl: './debounce-time.component.html',
  styleUrls: ['./debounce-time.component.scss'],
})
export class DebounceTimeComponent implements OnInit, AfterViewInit {
  @ViewChild('myInput') myInput: ElementRef;
  reqData: any = null;

  @ViewChild('myInput2') myInput2: ElementRef;
  reqData2: any = null;
  constructor() {}
  ngOnInit(): void {}
  ngAfterViewInit(): void {
    // Ex 01 - debounceTime
    const searchTerm = fromEvent<any>(this.myInput.nativeElement, 'keyup').pipe(
      map((event) => event.target.value),
      debounceTime(1000)
    );
    searchTerm.subscribe((res) => {
      console.log(res);
      this.reqData = res;
      setTimeout(() => {
        this.reqData = null;
      }, 2000);
    });
    // Ex 02 - DistinctUntilChanged
    const searchTerm2 = fromEvent<any>(
      this.myInput2.nativeElement,
      'keyup'
    ).pipe(
      map((event) => event.target.value),
      debounceTime(1000),
      distinctUntilChanged()
    );
    searchTerm2.subscribe((res) => {
      console.log(res);
      this.reqData2 = res;
      setTimeout(() => {
        this.reqData2 = null;
      }, 2000);
    });
  }
}

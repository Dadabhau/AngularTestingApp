import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { fromEvent } from 'rxjs';
import { DesignUlilityService } from 'src/app/appservices/design-ulility.service';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.scss'],
})
export class FromEventComponent implements OnInit, AfterViewInit {
  @ViewChild('addBtn') addBtn: ElementRef<any>;
  constructor(private _designUtility: DesignUlilityService) {}
  ngOnInit(): void {}
  ngAfterViewInit() {
    let count = 1;
    fromEvent(this.addBtn.nativeElement, 'click').subscribe((res) => {
      let countVal = `Video ${count++}`;
      this._designUtility.print(countVal, 'elContainer');
      this._designUtility.print(countVal, 'elContainer2')
    });
  }
}

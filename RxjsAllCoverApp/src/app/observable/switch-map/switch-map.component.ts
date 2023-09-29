import { Component, OnInit } from '@angular/core';
import {
  concatAll,
  concatMap,
  delay,
  from,
  map,
  of,
  switchAll,
  switchMap,
} from 'rxjs';
import { DesignUlilityService } from 'src/app/appservices/design-ulility.service';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.scss'],
})
export class SwitchMapComponent implements OnInit {
  constructor(private _ui: DesignUlilityService) {}
  // Get Observable
  getData(data: any) {
    return of(data + ' Video Uploaded').pipe(delay(2000));
  }
  ngOnInit(): void {
    const source = from(['Tech', 'Comedy', 'News']);

    // Ex - 01 | Map
    source.pipe(map((data) => this.getData(data))).subscribe((res) => {
      console.log(res);
      this._ui.print(res, 'elContainer');
    });

    // Ex - 02 | Map + SwitchAll
    source
      .pipe(
        map((data) => this.getData(data)),
        switchAll()
      )
      .subscribe((res) => {
        console.log(res);
        this._ui.print(res, 'elContainer1');
      });

    // Ex - 03 | SwitchMap
    source.pipe(switchMap((data) => this.getData(data))).subscribe((res) => {
      console.log(res);
      this._ui.print(res, 'elContainer2');
    });
  }
}

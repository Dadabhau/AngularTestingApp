import { Component, OnInit } from '@angular/core';
import { from, of, map, mergeAll, mergeMap } from 'rxjs';
import { DesignUlilityService } from 'src/app/appservices/design-ulility.service';

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrls: ['./merge-map.component.scss'],
})
export class MergeMapComponent implements OnInit {
  constructor(private _ui: DesignUlilityService) {}
  // Get Observable
  getData(data: any) {
    return of(data + ' Video Uploaded');
  }
  ngOnInit(): void {
    const source = from(['Tech', 'Comedy', 'News']);

    // source.pipe(map((res) => this.getData(res))).subscribe((res) =>
    //   res.subscribe((finalRes) => {
    //     console.log(finalRes);
    //     this._ui.print(finalRes, 'elContainer1');
    //   })
    // );

    // Ex - 01 | Map
    source.pipe(map((res) => this.getData(res))).subscribe((res) => {
      console.log(res);
      this._ui.print(res, 'elContainer');
    });

    // Ex - 02 | Map + MergeAll
    source
      .pipe(
        map((res) => this.getData(res)),
        mergeAll()
      )
      .subscribe((res1) => {
        console.log(res1);
        this._ui.print(res1, 'elContainer1');
      });

    // Ex - 03 | mergeMap
    source.pipe(mergeMap((res) => this.getData(res))).subscribe((res3) => {
      console.log(res3);
      this._ui.print(res3, 'elContainer2');
    });
  }
}

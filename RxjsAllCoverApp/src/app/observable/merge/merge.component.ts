import { Component, OnInit } from '@angular/core';
import { interval, map, take, merge } from 'rxjs';
import { DesignUlilityService } from 'src/app/appservices/design-ulility.service';

@Component({
  selector: 'app-merge',
  templateUrl: './merge.component.html',
  styleUrls: ['./merge.component.scss'],
})
export class MergeComponent {
  constructor(private _ui: DesignUlilityService) {}
  ngOnInit(): void {
    // sourceTech
    const sourceTech = interval(3000).pipe(
      map((video) => 'Tech Video #' + (video + 1)),
      take(5)
    );

    // sourceCommedy
    const sourceCommedy = interval(4000).pipe(
      map((video) => 'Commedy Video #' + (video + 1)),
      take(3)
    );

    // sourceNews
    const sourceNews = interval(3500).pipe(
      map((video) => 'News Video #' + (video + 1)),
      take(4)
    );

    const finalOBS = merge(sourceTech, sourceCommedy, sourceNews);
    finalOBS.subscribe((res) => {
      console.log(res);
      this._ui.print(res, 'elContainer');
    });
  }
}

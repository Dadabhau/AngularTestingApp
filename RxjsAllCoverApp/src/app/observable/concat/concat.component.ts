import { Component, OnInit } from '@angular/core';
import { concat, interval, map, take } from 'rxjs';
import { DesignUlilityService } from 'src/app/appservices/design-ulility.service';

@Component({
  selector: 'app-concat',
  templateUrl: './concat.component.html',
  styleUrls: ['./concat.component.scss'],
})
export class ConcatComponent implements OnInit {
  constructor(private _ui: DesignUlilityService) {}
  ngOnInit(): void {
    // sourceTech
    const sourceTech = interval(1000).pipe(
      map((video) => 'Tech Video #' + (video + 1)),
      take(5)
    );

    // sourceCommedy
    const sourceCommedy = interval(1000).pipe(
      map((video) => 'Commedy Video #' + (video + 1)),
      take(3)
    );

    // sourceNews
    const sourceNews = interval(1000).pipe(
      map((video) => 'News Video #' + (video + 1)),
      take(4)
    );

    const finalOBS = concat(sourceTech, sourceCommedy, sourceNews);
    finalOBS.subscribe((res) => {
      console.log(res);
      this._ui.print(res, 'elContainer');
    });
  }
}

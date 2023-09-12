import { Component, OnInit } from '@angular/core';
import { DesignUlilityService } from 'src/app/appservices/design-ulility.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  exclusive: boolean = false;
  constructor(private _uiService: DesignUlilityService) {}
  ngOnInit(): void {
    this._uiService.exclusive.subscribe((res) => {
      this.exclusive = res;
    });
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'RxjsAllCoverApp';
  demo = {
    'name':'Dada',
    'id':'Dada'
  };
  todo = '';
}

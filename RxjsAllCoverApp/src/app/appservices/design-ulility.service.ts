import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DesignUlilityService {
  constructor() {}
  exclusive = new Subject<boolean>();
  // for Subject
  //username = new Subject<string>();

  // For BehaviorSubject
  username = new BehaviorSubject<string>('Dadabhau');
  print(val: any, containerId: any) {
    let el = document.createElement('li');
    el.classList.add('list-group-item', 'list-item');
    el.innerText = val;
    document.getElementById(containerId)?.appendChild(el);
  }
}

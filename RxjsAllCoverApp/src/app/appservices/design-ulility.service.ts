import { Injectable } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

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

  // Replay Subject
  // videoemit = new ReplaySubject<string>(3);

  // Replay Subject with time
  videoemit = new ReplaySubject<string>(3, 5000);

  // Async Subject
  asyncVideoEmit = new AsyncSubject();

  // List Display method
  print(val: any, containerId: any) {
    let el = document.createElement('li');
    el.classList.add('list-group-item', 'list-item');
    el.innerText = val;
    document.getElementById(containerId)?.appendChild(el);
  }
}

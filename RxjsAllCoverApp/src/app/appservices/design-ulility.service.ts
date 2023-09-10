import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DesignUlilityService {
  constructor() {}

  print(val: any, containerId: any) {
    let el = document.createElement('li');
    el.classList.add('list-group-item', 'list-item');
    el.innerText = val;
    document.getElementById(containerId)?.appendChild(el);
  }
}

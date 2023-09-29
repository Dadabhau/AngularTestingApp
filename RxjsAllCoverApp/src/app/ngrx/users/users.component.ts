import { Component, OnInit } from '@angular/core';
import { State } from '@ngrx/store';
import { ProductsService } from 'src/app/appservices/products.service';
import { User } from 'src/app/models/user';
import {
  UserListRequsetAction,
  UserListSuccessAction,
} from 'src/app/store/action/user-action';
import { RootReducerState } from 'src/app/store/reducer';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  constructor(
    private _user: ProductsService,
    private store: State<RootReducerState>
  ) {}
  ngOnInit(): void {
    this.fetchData();
  }
  fetchData() {
    // this.store.dispatch(new UserListRequsetAction());
    this._user.getAllUsers().subscribe((res) => {
      console.log(res);
      this.users = res;
      // this.store.dispatch(new UserListSuccessAction({ data: res }));
    });
  }
}

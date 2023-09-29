import { User } from 'src/app/models/user';

export const USER_LIST_REQUSET = 'user list requset';
export const USER_LIST_SUCCESS = 'user list success';
export const USER_LIST_FAILED = 'user list failed';

export class UserListRequsetAction {
  readonly type = USER_LIST_REQUSET;
  constructor(public payload?: any) {}
}

export class UserListSuccessAction {
  readonly type = USER_LIST_SUCCESS;
  constructor(public payload?: { data: User[] }) {}
}

import { User } from 'src/app/models/user';
import { Action } from '../action';
import { USER_LIST_REQUSET, USER_LIST_SUCCESS } from '../action/user-action';

export interface UserReducerState {
  loading: boolean;
  loaded: boolean;
  users: User[];
}

// State Define
const initialState: UserReducerState = {
  loading: false,
  loaded: false,
  users: [],
};

export function UserReducer(
  state = initialState,
  action: Action
): UserReducerState {
  switch (action.type) {
    case USER_LIST_REQUSET: {
      return { ...state, loading: true };
    }
    case USER_LIST_SUCCESS: {
      // New data return
      // const data = action.payload.data;
      // Added in old data
      const updatedUsers = state.users.concat(action.payload.data);
      return { ...state, loading: false, loaded: true, users: updatedUsers };
    }
    default:
      return state;
  }
}

//Selectors
export const getLoading = (state: UserReducerState) => state.loading;
export const getLoaded = (state: UserReducerState) => state.loaded;
export const getUsers = (state: UserReducerState) => state.users;

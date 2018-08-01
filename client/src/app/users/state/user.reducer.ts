import { User } from '../user';

import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserActions, UserActionTypes } from './user.action';
import * as  fromRoot from '../../state/app.state';

export interface State extends fromRoot.State{
    Users: UserState;
  }
  
  export interface UserState{
    
    currentUserId: number | null;
    users: User[];
    error: string; 
    
  }
  
  const initialState: UserState = {
    
    currentUserId: null,
    users:[],
    error: ''
    
};

const getUserFeatureState = createFeatureSelector<UserState>('users');


export const getCurrentUserId = createSelector(
    getUserFeatureState,
    state => state.currentUserId
  );
  

export const getUsers = createSelector(
    getUserFeatureState,
    state => state.users 
);

export const getCurrentUser = createSelector(
    getUserFeatureState,
    getCurrentUserId,
    (state, currentUserId) => {
      if (currentUserId === 0) {
        return {
          id: 0,
          userName: '',
        };
      } else {
        return currentUserId ? state.users.find(u => u.id === currentUserId) : null;
      }
    }
  );



export const getError = createSelector(
  getUserFeatureState,
  state => state.error
);



export function reducer(state = initialState, action: UserActions): UserState
{
    switch  (action.type)
    {

        default:
            return state;
    }
}
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';

import { ChatService } from '../../chat.service';
import { User } from '../user';

/* NgRx */
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as userActions from './user.action';

@Injectable()
export class UserEffects {

  constructor(private ChatService: ChatService,
              private actions$: Actions) { }

 

  // @Effect()
  // createUser$: Observable<Action> = this.actions$.pipe(
  //   ofType(userActions.UserActionTypes.CreateUser),
  //   map((action: userActions.CreateUser) => action.payload),
  //   mergeMap((user: User) =>
  //     this.ChatService.setUsername(user).pipe(
  //       map(userlist => (new userActions.CreateUserSuccess(userlist))),
  //       catchError(err => of(new userActions.CreateUserFail(err)))
  //     )
  //   )
  // );
  

  
}

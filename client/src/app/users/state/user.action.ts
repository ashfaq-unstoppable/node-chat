import { Action } from "@ngrx/store";
import { User } from "../user";

export enum UserActionTypes{

    CreateUser = '[User] Create User',
    CreateUserSuccess = '[User] Create User',
    CreateUserFail = '[User] Create User',

    CreateMsg = '[Msgs] Create Msg',
    CreateMsgSuccess = '[Msgs] Create Msg Creat',
    CreateMsgFail = '[Msgs] Create Msg Fail',
    
}


export class CreateUser implements Action {
    readonly type = UserActionTypes.CreateUser;
  
    constructor(public payload: User) { }
  }
  
  export class CreateUserSuccess implements Action {
    readonly type = UserActionTypes.CreateUserSuccess;
  
    constructor(public payload: User) { }
  }
  
  export class CreateUserFail implements Action {
    readonly type = UserActionTypes.CreateUserFail;
    constructor(public payload: string) { }

  }

  export class CreateMsg implements Action {
    readonly type = UserActionTypes.CreateMsg;
  
    constructor(public payload: User) { }
  }
  
  export class CreateMsgSuccess implements Action {
    readonly type = UserActionTypes.CreateMsgSuccess;
  
    constructor(public payload: User) { }
  }
  
  export class CreateMsgFail implements Action {
    readonly type = UserActionTypes.CreateMsgFail;
    constructor(public payload: string) { }

  }



export type UserActions = CreateUser
|CreateUserSuccess
|CreateUserFail
|CreateMsg
|CreateMsgSuccess
|CreateMsgFail;
import { Component, OnInit } from '@angular/core';
import {ChatService} from '.././chat.service';

/* NgRx */
import { Store, select } from '@ngrx/store';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

    

  ngOnInit() {
  }

  
  user:String;
  socketid: String;
  messageText:String; 
  reciever: String;
  senderName: String;
    
  //array for messages
  messageArray:Array<{user:String,message:String}> = [];
  
  //aray for getting list of users
//   userArray:Array<{user:String,message:String}> = [];
  userArray:Array<{user:String}> = [];

  //array for getting list of socket ids
  socketIDArray:Array<{user:String}> = [];

  
  constructor(private store: Store<any>,private _chatService:ChatService){
    this.setUsername();

    this._chatService.newMessageReceived()
        .subscribe(data=>this.messageArray.push(data));

    this._chatService.newUserJoined()
    .subscribe(data=> this.messageArray.push(data));
    
    this._chatService.newUserDisconnected()
    .subscribe(data => this.messageArray.push(data));

    this._chatService.newUserList()
    .subscribe(data=> this.userArray.push(data));

    

    

    
  }

 
  
  setUsername(){
    // console.log('herere', this.user);
    // this._chatService.userExists({user:this.user});

    this._chatService.newUser({user:this.user});
    this.senderName = this.user;
    this.reciever = "community";
  }

  sendMessage()
    {
        // console.log('this.userthis.user send messah=ge', this.user);



        this._chatService.sendMessage({user:this.user, message:this.messageText});
    }
    

    userlist()
    {
        this._chatService.userlist({user:this.user});
        
    }
    userExists()
    {
        this._chatService.userExists({user:this.user});
    } 

    setReciever(sReciever: any)
    {
        this.reciever = sReciever;

        // this._chatService.getSocketID({reciever: sReciever});
        
        
    }
    
    getSocketID()
    {   
        
        this._chatService.getSocketID(this.reciever);
        
        
    }

}
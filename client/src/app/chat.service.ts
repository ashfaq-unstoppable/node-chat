import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class ChatService {

  private socket = io('http://localhost:3000');

  constructor() { }


  newUser(data) {
    this.socket.emit('NewUser', data);
 };
 
 newUserJoined()
    {
    

        let observable = new Observable<{user:String, message:String}>(observer=>{
            this.socket.on('new user joined', (data)=>{
                observer.next(data);
                
            });
            return () => {this.socket.disconnect();}
        });

        return observable;
    }

    newUserDisconnected()
    {
    

        let observable = new Observable<{user:String, message:String}>(observer=>{
            this.socket.on('disconnected', (data)=>{
                observer.next(data);
                
            });
            return () => {this.socket.disconnect();}
        });

        return observable;
    }

    sendMessage(data)
    {
        this.socket.emit('message',data);
        // this.socket.emit('pm',data);
    }

    

    newMessageReceived(){
        let observable = new Observable<{user:String, message:String}>(observer=>{
            this.socket.on('new message', (data)=>{
                observer.next(data);
            });
            return () => {this.socket.disconnect();}
        });

        return observable;
    }

    userlist(data)
    {
        this.socket.emit('userlist',data);
    }

    

    newUserList(){
        let observable = new Observable<{user:String, message:String}>(observer=>{
            this.socket.on('new user', (data)=>{
                observer.next(data);
            });
            return () => {this.socket.disconnect();}
        });

        return observable;
    }

    newSocketIDList(){
        let observable = new Observable<{user:String}>(observer=>{
            this.socket.on('new user sID list', (data)=>{
                observer.next(data);
            });
            return () => {this.socket.disconnect();}
        });

        return observable;
    }

    newReciever(){
        let observable = new Observable<{user:String, message:String}>(observer=>{
            this.socket.on('new reciever', (data)=>{
                observer.next(data);
            });
            return () => {this.socket.disconnect();}
        });

        return observable;
    }

    userExists(data){

    this.socket.emit('userExists', data); 
    }
 
    getSocketID(data){
        this.socket.emit('getsocketid', data); 

    }
}

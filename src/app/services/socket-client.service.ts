import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Message } from '../entity/message';
declare var SockJS:any
declare var Stomp:any

@Injectable({
  providedIn: 'root'
})
export class SocketClientService {

  public data:any
  stompClient:any

  constructor() { 
     this.initSockt()
  }

  initSockt(){
    var socket = SockJS(environment.api);
    this.stompClient = Stomp.over(socket)
    this.stompClient.connect({},()=>{
      console.log("SOCKET","Connected")
      this.stompClient.subscribe('/receive', (message:any) => {
        this.data = message
      });
    })
  }

  sendMessage(message:any){
    this.stompClient.send('/app/sent' , {}, message);
  }
}



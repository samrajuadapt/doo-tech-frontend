import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
declare var SockJS:any
declare var Stomp:any

@Injectable({
  providedIn: 'root'
})
export class SocketClientService {

  constructor() { 
    // this.initSockt()
  }

  initSockt(){
    console.log("SOCKET","init Socket")
    var socket = SockJS(environment.api);
    var stompClient = Stomp.over(socket)
    stompClient.connect({},()=>{
      console.log("SOCKET","Connected")
    })
  }
}



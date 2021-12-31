import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Message } from 'src/app/entity/message';
import { BrodcastService } from 'src/app/services/brodcast.service';
import { SocketClientService } from 'src/app/services/socket-client.service';

@Component({
  selector: 'app-tab-main',
  templateUrl: './tab-main.component.html',
  styleUrls: ['./tab-main.component.css']
})
export class TabMainComponent implements OnInit {

  navLinks = [
    {
      label: 'Data via Broadcast',
      link: '/one',
      index: 0
    }, {
      label: 'Data via Router',
      link: '/two',
      index: 1
    }, {
      label: 'Data Via Cookie',
      link: '/three',
      index: 2
    },
    {
      label: 'Socket Connection',
      link: '/four',
      index: 3
    },
  ];

  activeIndex = 0;
  inputValue = ""

  constructor(private router: Router,
    private broadcastService:BrodcastService,
    private cookie:CookieService,
    private socket:SocketClientService) {
  }

  ngOnInit(): void {
  }

  onTabClick(link:any){
    this.activeIndex = link.index
    this.router.navigate([link.link,{data:this.inputValue}])
  }

  onKeyUp(event:any){
    this.inputValue = event.target.value
  }

  onSubmitClick(){
    this.broadcastService.boradcast("EVENT", this.inputValue);
    this.cookie.set("data",this.inputValue)
  }

  sendSocket(){
    this.socket.sendMessage(this.inputValue)
  }

}

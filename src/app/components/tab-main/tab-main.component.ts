import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BrodcastService } from 'src/app/services/brodcast.service';

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
      label: 'Third',
      link: '/three',
      index: 2
    },
  ];

  activeIndex = 0;
  inputValue = ""

  constructor(private router: Router,private broadcastService:BrodcastService) {
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
    window.localStorage.setItem("data", this.inputValue);
  }

}
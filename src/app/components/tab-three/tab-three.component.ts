import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-tab-three',
  templateUrl: './tab-three.component.html',
  styleUrls: ['./tab-three.component.css']
})
export class TabThreeComponent implements OnInit {

  data:any

  constructor(private cookie:CookieService) { 
  }

  ngOnInit(): void {
  }

  onBurronClick(){
    this.data = this.cookie.get("data")
  }

}

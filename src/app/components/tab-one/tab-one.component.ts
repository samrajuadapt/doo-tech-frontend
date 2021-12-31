import { Component, OnInit } from '@angular/core';
import { BrodcastService } from 'src/app/services/brodcast.service';

@Component({
  selector: 'app-tab-one',
  templateUrl: './tab-one.component.html',
  styleUrls: ['./tab-one.component.css']
})
export class TabOneComponent implements OnInit {

  data:any

  constructor(private broadcastService:BrodcastService) { 
    this.broadcastService.subscribe("EVENT", (data) => {
      this.data = data
      });
  }

  ngOnInit(): void {
  }

}

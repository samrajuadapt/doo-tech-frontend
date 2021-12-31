import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tab-two',
  templateUrl: './tab-two.component.html',
  styleUrls: ['./tab-two.component.css']
})
export class TabTwoComponent implements OnInit {

  routerData:any

  constructor(private route:Router,private activeRoute:ActivatedRoute) {
    this.routerData = activeRoute.snapshot.paramMap.get("data")
  }

  ngOnInit(): void {
  }

}

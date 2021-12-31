import { Component, OnInit } from '@angular/core';
import { SocketClientService } from 'src/app/services/socket-client.service';

@Component({
  selector: 'app-tab-four',
  templateUrl: './tab-four.component.html',
  styleUrls: ['./tab-four.component.css']
})
export class TabFourComponent implements OnInit {

  constructor(public socket:SocketClientService) { }

  ngOnInit(): void {
  }

}

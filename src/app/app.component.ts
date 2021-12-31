import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SocketClientService } from './services/socket-client.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'doo-tech';

  constructor(private socketClient:SocketClientService,private router:Router){
    router.navigateByUrl('one')
  }
}

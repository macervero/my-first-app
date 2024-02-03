import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrl: './server.component.css'
})
export class ServerComponent {
  public serverId: number = 10;
  public serverStatus: string;

  constructor() {
    if(Math.random() > 0.5) this.serverStatus = "online";
    else this.serverStatus = "offline";
  }

  public getServerStatus(): string {
    return this.serverStatus;
  }

  public getColor(): string {
    if(this.serverStatus == "online") return "#198754"; //bootstrap green
    else return "#dc3545";                              //bootstrap red
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrl: './server.component.css'
})
export class ServerComponent {
  public serverId: number = 10;
  public serverStatus: string = "offline";

  public getServerStatus(): string {
    return this.serverStatus;
  }
}

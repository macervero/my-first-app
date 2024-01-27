import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent {
  public allowNewServer: boolean = false;
  public serverCreationStatus: string = "No server was created";
  public serverName: string = "";

  constructor() {
    //setInterval();
    setTimeout(
      () => {
        this.allowNewServer = !this.allowNewServer;
      }, 2000);
  }

  onCreateServer(): void {
    this.serverCreationStatus = "Server was created! Name is " + this.serverName;
  }

  /*onUpdateServerName(event: Event): void {
    //Implicit casting
    this.serverName = (<HTMLInputElement>event.target).value;
  }*/
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
	allowNewServer = false;
  serverCreationStatus = "No Server was created";
  serverName ="Test Server";
  userName ="";
  serverCreated = false;
  servers = ['TestServer','TestServer 2'];
  showDetails = false;
  details = [];
  constructor() { 

  	setTimeout(()=>{
  		this.allowNewServer = true;
  	},2000)
  }

  ngOnInit() {
  }

  onCreateServer(){
    this.servers.push(this.serverName);
    this.serverCreationStatus = "Server was created ! Name is " + this.serverName;
    this.serverCreated = true;
  }

  onUpdateServerName(event){
    this.serverName = (<HTMLInputElement>event.target).value; 
    }

   onToggleDetails(){
     this.showDetails  = ! this.showDetails;
     this.details.push(new Date());
   }
   getColorByItem(item){
     if(item>=4)
       return 'blue';
   }
  
}

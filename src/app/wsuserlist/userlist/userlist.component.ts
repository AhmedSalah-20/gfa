import { Component, OnInit } from '@angular/core';
import { Wsuser } from '../../models/wsuser';
import { WsuserService } from '../../services/wsuser.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrl: './userlist.component.css'
})
export class UserlistComponent implements OnInit {
  
  wsusers:Wsuser[]=[];
 
  
  constructor(private wsuserservice:WsuserService) { }
  ngOnInit(): void {
    this.loadWsusers();
  }
  loadWsusers(): void {
    this.wsuserservice.getAllWSUsers().subscribe(wsusers => {
      this.wsusers = wsusers;
    });
    
}
}
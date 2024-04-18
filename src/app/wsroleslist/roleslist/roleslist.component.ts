import { Component, OnInit } from '@angular/core';
import { Wsroles } from '../../models/wsroles';
import { WsrolesService } from '../../services/wsroles.service';

@Component({
  selector: 'app-roleslist',
  templateUrl: './roleslist.component.html',
  styleUrl: './roleslist.component.css'
})
export class RoleslistComponent implements OnInit {

  wsroles:Wsroles[]=[];

  constructor(private wsrolesservice:WsrolesService) {}
  ngOnInit(): void {
    this.loadWSRoles();
  }
    loadWSRoles(): void {
      this.wsrolesservice.getAllWSRoles().subscribe( wsroles => {
        this.wsroles = wsroles;
      })
    }
  }


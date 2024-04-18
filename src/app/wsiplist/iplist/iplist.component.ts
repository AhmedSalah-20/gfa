import { Component, OnInit } from '@angular/core';
import { Wsip } from '../../models/wsip';
import { WsipService } from '../../services/wsip.service';

@Component({
  selector: 'app-iplist',
  templateUrl: './iplist.component.html',
  styleUrl: './iplist.component.css'
})
export class IplistComponent implements OnInit{
wsips: Wsip[]=[];


constructor(private wsipservice:WsipService){}
ngOnInit(): void {
  this.loadWsips();
}
loadWsips(): void {
  this.wsipservice.getAllWSIPs().subscribe(wsips => {
    this.wsips = wsips;
  });


}
}

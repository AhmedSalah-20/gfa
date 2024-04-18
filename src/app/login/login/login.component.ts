import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { LoginuserService } from '../../services/loginuser.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  user:User = new User();

  constructor(private loginuserservice:LoginuserService) { }
  ngOnInit(): void {
  }
  userLogin(){
  console.log(this.user)
  this.loginuserservice.loginUser(this.user).subscribe(data=>{
    alert("Login Successfully")
  },error=>alert("Sorry Please enter correct Username and Password"));
  
}

}

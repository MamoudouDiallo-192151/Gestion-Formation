import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { Utilisateur } from 'src/app/model/user.model';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
user =new Utilisateur();
  constructor(private userService : UserService,private router: Router) {  }

  ngOnInit(): void {
  }
  addUser():void{
    this.userService.addUser(this.user).subscribe(u=>{
      console.log(u);
    });
    this.router.navigate(['allUsers']).then(()=>{
      window.location.reload();
    })
  }

}

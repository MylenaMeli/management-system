import { Component } from '@angular/core';
import { UserService } from '../service/user.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  imports: [FormsModule, CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
 users: any[] | undefined;
 constructor(private userService:UserService){

 }
 ngOnInit(){
  this.loadUsers();
 }
 loadUsers(): void {
  this.userService.getAllUsers().subscribe((data) => {
    this.users = data;
  });
}
}

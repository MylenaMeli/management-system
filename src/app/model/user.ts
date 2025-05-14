export class User {
   
    id: number;
    username: string;
    email: string;
    role: string;
    password: string;
  
    constructor() {
      this.email = ""; 
      this.username="";
      this.id=0;
      this.password="";
      this.role=""
  
  
    }
}
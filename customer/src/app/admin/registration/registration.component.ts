import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DatabaseService } from '../../services/database.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {


  constructor(private data:DatabaseService,private route:Router ,private form:FormBuilder) { }
registerForm=this.form.group({
  username:['',[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
//  acno:['',[Validators.pattern('[0-9]*')]],
 pswd:['',[Validators.required,Validators.minLength(6)]]
})
  ngOnInit(): void {
  }


  
  signUp(){
var username=this.registerForm.value.username
var pswd=this.registerForm.value.pswd 
// var acno=this.registerForm.value.acno
if(this.registerForm.valid){


this.data.signUp(username,pswd).subscribe((result:any)=>{
//  console.log(pswd);
    alert(result.message)
    this.route.navigateByUrl('login')
  
},(result: { error: { message: any; }; }) =>{
  alert(result.error.message)
  this.route.navigateByUrl('registration')
})


  }
  else{
    alert('please fill the form')
   
    console.log(this.registerForm.get('pswd')?.errors);
    // console.log(this.registerForm.get('username')?.errors);
      }
}
get f() { return this.registerForm.controls; }

}

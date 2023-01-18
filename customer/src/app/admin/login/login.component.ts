import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { DatabaseService } from '../../services/database.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit { //3rd execution
  //properties and methods



  acno="";//properties
  pswd="";

  userDetails:any ={//object of objects
    1000:{acno:1000,username:'Allwin',password:1000,balance:10000},
    1001:{acno:1001,username:'Fayas',password:1001,balance:10000},
    1002:{acno:1002,username:'Jishna',password:1002,balance:10000},
  }
  constructor(private route:Router,private database:DatabaseService,private fb:FormBuilder ) { 
    
   }//1st execution
   formGroup=this.fb.group({
email:['',[Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
pswd:['',[Validators.required]]
   })
get f(){ return this.formGroup.controls;}


  ngOnInit(): void {
  }

  login(){
    // alert('Login clicked');
  
    var pswd=this.formGroup.value.pswd
    var acno=this.formGroup.value.email
    
    if(this.formGroup.valid){


      this.database.login(acno,pswd).subscribe((result:any)=>{
        console.log('result: ', result);
        localStorage.setItem('currentUser',result.currentuser)
        localStorage.setItem('token',result.token)
        //  console.log(pswd);
        Swal.fire(
          'LogIn!',
          'You have been Successfully LogIn',
          'success'
        ).then((result) => {
          if (result.isConfirmed) {
          
            this.route.navigateByUrl('dashboard')
     
          }
        })
        
          
        },result =>{
          alert(result.error.message)
          this.route.navigateByUrl('login')
        })
        
    }
   else{
    console.error
   }
  }


}
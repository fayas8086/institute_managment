import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-studentlogin',
  templateUrl: './studentlogin.component.html',
  styleUrls: ['./studentlogin.component.scss']
})
export class StudentloginComponent implements OnInit {



  constructor(private route:Router,private database:StudentsService,private fb:FormBuilder , private r:ActivatedRoute) { 
    
  }//1st execution
  formGroup=this.fb.group({
acno:['',[Validators.required]],
pswd:['',[Validators.required]]
  })
get f(){ return this.formGroup.controls;}


 ngOnInit(): void {//2nd execution - life cycle hooks of angular 
   //inital process of component
   localStorage.removeItem('currentUser')
   localStorage.removeItem('id')
   localStorage.removeItem('userDetails')
   localStorage.removeItem('currentacno')
   localStorage.removeItem('token')
 }

 //userdefined functions //4th execution
 // acnoChange(event:any)
 // {
 //   this.acno=(event.target.value);//1000
 //   console.log(this.acno);
   

 // }
 // pswdChange(event:any){
 //   this.pswd=(event.target.value);
 //   console.log(this.pswd);
   
 // }
 

//   login(acn:any, psw:any){
//     // alert('Login clicked');
// console.log(acn,psw);
//     var acno=acn.value;//1000
//     var pswd=psw.value;
//     var userDetails=this.userDetails;

//     if(acno in userDetails){

//       if(pswd==userDetails[acno]['password']){
//         alert("login success");
//       }else{
//         alert("incorrect password");
//       }

//     }
//     else{
//       alert('user not found');
//     }

//   }

 login(){
   // alert('Login clicked');
   var pswd=this.formGroup.value.pswd
   var acno=this.formGroup.value.acno
   
   if(this.formGroup.valid){


     this.database.login(acno,pswd).subscribe((result:any)=>{
       console.log('result: ', result);
       localStorage.setItem('currentUser',result.acno)
       localStorage.setItem('token',result.token)
       //  console.log(pswd);
       Swal.fire(
         'LogIn!',
         'You have been Successfully LogIn',
         'success'
       ).then((result) => {
         if (result.isConfirmed) {
         
           this.route.navigate(['studentdash'],{ relativeTo: this.r });
    
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



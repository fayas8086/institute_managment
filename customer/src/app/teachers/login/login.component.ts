import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router'
import { DatabaseServiceService } from 'src/app/teachers/database-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private route:Router,private database:DatabaseServiceService,private fb:FormBuilder,  private r:ActivatedRoute) { }

  ngOnInit(): void {
  }
  formGroup=this.fb.group({
    email:['',[Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    pswd:['',[Validators.required]]
       })
    get f(){ return this.formGroup.controls;}
    
    login(){
      // alert('Login clicked');
    
      var pswd=this.formGroup.value.pswd
      console.log('pswd: ', pswd);
      var acno=this.formGroup.value.email
      console.log('acno: ', acno);
      
      if(this.formGroup.valid){
  
  
        this.database.login(acno,pswd).subscribe((result:any)=>{
          console.log('result: ', result);
          localStorage.setItem('currentUser',result.currentuser)
          localStorage.setItem('course',result.course)
          // localStorage.setItem('teacher',acno)
          localStorage.setItem('token',result.token)
          //  console.log(pswd);
          Swal.fire(
            'LogIn!',
            'You have been Successfully LogIn',
            'success'
          ).then((result) => {
            if (result.isConfirmed) {
            
              this.route.navigate(['dashboard'],{ relativeTo: this.r })
       
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

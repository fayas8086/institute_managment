import { Injectable } from '@angular/core';

import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatabaseServiceService {
  getcourse() {
    throw new Error('Method not implemented.');
  }
  currentAcno: any;
 
 
  constructor(private route:Router,public http:HttpClient)  { }
  login(acno:any,pswd:any){
    const data={
      acno,pswd    
    }
    this.currentAcno=acno
    
   
   return this.http.post('http://localhost:3000/Teacherlogin',data)}
   getstudent(teacher:any){
    // console.log('teacher:any: ', teacher);
    const data={
   teacher   
    }
    return this.http.post('http://localhost:3000/showstudent',data) 
   }


   deletestudent(student:any){

 
    // console.log('data: ', data);
    return this.http.delete('http://localhost:3000/deletestudent/'+student)
          // console.log('data: ', data);
    // this.todo.splice(t,1)
  
    }

   add(email:any,password:any,firstname:any,lastname:any,address:any,gender:any,image:any,fees:any){
    console.log('fees: ', fees);
    // console.log('course: ', course);
    console.log('image: ', image);
    
   
    // console.log('details: ', details);
    var course:any = localStorage.getItem('course')
    console.log('course: ', course);
  var teacher:any=localStorage.getItem('currentUser')
  console.log('teacher: ', teacher);
    const formdata =new FormData();
    formdata.append('file',image)
    formdata.append('lastname',lastname)
    formdata.append('email',email)
    formdata.append('password',password)
    formdata.append('address',address)
    formdata.append('gender',gender)
    formdata.append('firstname',firstname)
    formdata.append('course',course)
    formdata.append('fees',fees)
    formdata.append('teacher',teacher)
    // console.log('formdata: ', formdata);
    // const data=
    //   {
    //     firstname,lastname,email,password,address,gender,formdata
    //     }
        // console.log('data: ', data);
     return this.http.post('http://localhost:3000/addstudent',formdata ,)
  
    
  
  
    }
  

}



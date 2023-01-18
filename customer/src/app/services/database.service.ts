import { transition } from '@angular/animations';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  id:any=7
  currentUser:any;
  currentAcno:any;

 userDetails:any =[//object of objects
 {id:1,firstname:'Allwin',lastname:'shaji',email:"allwinshaji@gmail.com",password:"ernakulam",address:"345 2nd street",gender:"male"},
 {id:2,firstname:'shajmil',lastname:'jamal',email:"shajmil@gmail.com",password:"ernakulam",address:" 2 angamaly street",gender:"male"},
 {id:3,firstname:'sana',lastname:'sajid',email:"sanasajid@gmail.com",password:"ernakulam",address:"345 2nd street",gender:"female"},
 {id:4,firstname:'fayas',lastname:'jabbar',email:"fayasJabbar@gmail.com",password:"ernakulam",address:"vadakkethalakkal",gender:"male"},
 {id:5,firstname:'sandhra',lastname:'francis',email:"san@gmai.com",password:"ernakulam",address:"puthyaveetil house",gender:"female"},
 {id:6,firstname:'sharik',lastname:'sajid',email:"shariksajid@gmail.com",password:"ernakulam",address:"3 street",gender:"male"},
 {id:7,firstname:'amritha',lastname:'luminar',email:"amritha@gmail.com",password:"ernakulam",address:"luminar technolab",gender:"female"},

 ]
  details: any;
  totalRecords: any;
 
constructor(private route:Router,public http:HttpClient) { 
  this. details=this.userDetails
  this.getDetails();
  this.saveDetails();

  }
  
  getemail(){
    const headerOptions = {
      headers: new HttpHeaders(
        {
          'email': localStorage.getItem('email')||''
        }
      )
    }
    return headerOptions
    }
saveDetails(){

  // if(  this.userDetails){

   
    
  //     // localStorage.setItem('userDetails',JSON.stringify(this.userDetails));
  //     this.totalRecords=this.userDetails.length
  //   }else{
  //   }
    if(this.id){
      localStorage.setItem('id',this.id );
    
  }
    
}
getDetails(){
  if(this.id){
    // console.log(localStorage.getItem('todo')||' ');
        this.id= (localStorage.getItem('id')||this.id)
       
      }
  // if(this.userDetails){
  //    this.userDetails=JSON.parse(localStorage.getItem('userDetails')||'[]')
  //    if(  this.userDetails.length == 0){
  //     this.userDetails=this.details;
  //    }
    // this.userDetails=JSON.parse(this.userDetails ||'[]')
  // }
}
getusers(){
  // console.log('hi');
  return this.http.get('http://localhost:3000/showcust') 
}
getcourse(){
  // console.log('hi');
  return this.http.get('http://localhost:3000/getcourse') 
}
add(email:any,password:any,firstname:any,lastname:any,address:any,gender:any,image:any,course:any){
  console.log('course: ', course);
  console.log('image: ', image);
  
 
  // console.log('details: ', details);
  

  const formdata =new FormData();
  formdata.append('file',image)
  formdata.append('lastname',lastname)
  formdata.append('email',email)
  formdata.append('password',password)
  formdata.append('address',address)
  formdata.append('gender',gender)
  formdata.append('firstname',firstname)
  formdata.append('course',course)
  // console.log('formdata: ', formdata);
  // const data=
  //   {
  //     firstname,lastname,email,password,address,gender,formdata
  //     }
      // console.log('data: ', data);
   return this.http.post('http://localhost:3000/add',formdata ,)

  


  }

  update(id:any,email:any,password:any,firstname:any,lastname:any,address:any,gender:any,SelectedCourse:any){
    var data=this.userDetails
    // console.log(id);
    
    data=
      {
      id,firstname,lastname,email,password,address,gender,SelectedCourse}
    
      return this.http.patch('http://localhost:3000/update',data)
  }
 
  login(acno:any,pswd:any){
    const data={
      acno,pswd    
    }
    this.currentAcno=acno
    this.saveDetails()
    
   return this.http.post('http://localhost:3000/login',data)}
  signUp(username:any,password:any){
    console.log('password: ', password);
  
    const data={
      username,password
      
    }
    console.log('data: ', data);
  
   return this.http.post('http://localhost:3000/register',data)
    
  //   var details = this.userDetails
  //   acno=Number(acno)
  //   if(acno in details){
  //     alert('already exist')
  //     return false
  //   }else{
  //     details[acno]={
  //       acno,
  //       username,
  //       password,
  // balance:0,
  //       transaction:[]
  //     }
  //     this.saveDetails()
  //   console.log(details);
  //     return true
  //   }
  
  }
  
remove(email:any){

  // console.log
  // ('index: ', t);
  const data={
    email:email
  }
  // console.log('data: ', data);
  return this.http.delete('http://localhost:3000/deleteCus',this.getemail())
        // console.log('data: ', data);
  // this.todo.splice(t,1)
  this.saveDetails()

  }
  removeclass(className:any){

 
  // console.log('data: ', data);
  return this.http.delete('http://localhost:3000/deleteClass/'+className)
        // console.log('data: ', data);
  // this.todo.splice(t,1)
  this.saveDetails()

  }

  
  addClass(fees:any,className:any,description:any){
    const data={
      fees,className,description
    
    }
    return this.http.post('http://localhost:3000/addclass',data)

  }
}











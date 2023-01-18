

import { transition } from '@angular/animations';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
const  options ={
header : new HttpHeaders()
}
@Injectable({
  providedIn: 'root'
})

export class StudentsService {
  
  currentUser:any;
  currentAcno:any;


constructor(private route:Router,public http:HttpClient) { }
gettoken(){
  const headerOptions = {
    headers: new HttpHeaders(
      {
        'token': localStorage.getItem('token')||''
      }
    )
  }
  return headerOptions
}
getstudent(mail:any){
  // console.log('mail:any: ', mail);
  const data={
 mail   
  }
  return this.http.post('http://localhost:3000/getstudent',data) 
 }
 login(acno:any,pswd:any){
  const data={
    acno,pswd    
  }
  this.currentAcno=acno

  
 return this.http.post('http://localhost:3000/studentlogin',data)
//    if(pswd==userDetails[acno]['password']){
//     this.currentUser=userDetails[acno]['username']
//     this.currentAcno=userDetails[acno].acno
//     Swal.fire(
//       'Good job!',
//       'You have successfully logged in!',
//       'success'
//     ).then(() => {
//       this.route.navigateByUrl('dashboard')
//   })
    
//    }else{
//      alert("incorrect password");
//    }

//  }
//  else{
//    alert('user not found');
//  }
}



 signUp(username:any,acno:any,password:any){
  console.log('password: ', password);

  const data={
    acno,username,password
    
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

withdraw(acno:any,pswd:any,amnt:any){
  // this.gettoken()
  // console.log(options.header);
  const data={
    acno,amnt,pswd,
    
    // token:options.header.get('token')
  }
  
  // console.log('options.headers: ', options.header);
  // console.log('data: ', data);
  
 
 
  return this.http.post('http://localhost:3000/withdraw',data,this.gettoken())
}





deposit(acno:any,pswd:any,amnt:any){
  // this.gettoken()
  console.log(options.header);
  const data={
    acno,amnt,pswd,
    
    // token:options.header.get('token')
  }
  
  // console.log('options.headers: ', options.header);
  // console.log('data: ', data);
  
 
 
  return this.http.post('http://localhost:3000/deposit',data,this.gettoken())


//   var userDetails=this.userDetails;
//   amnt=Number(amnt)

// console.log(userDetails);
// console.log(`acno`,acno);
// console.log(`pswd`,pswd);
// console.log(`ds pswd`,Object.keys(userDetails));
//   if(acno in userDetails){
 
//     if(pswd==userDetails[acno]['password']){
//     userDetails[acno]['transaction'].push({type:'Credit',amount:amnt})
//     console.log('userDetails: ', userDetails);
//     this.saveDetails()
//      return userDetails[acno]['balance']+=amnt
      
   
//     }
   
//     else{
//       alert("incorrect password");
//       return false
//     }
 
//   }
//   return false
}



getTransaction(acno:any){
  // this.gettoken()

  const data={
    acno
    
  }
  

 
  console.log('options.header: ', options.header);
 
  return this.http.post('http://localhost:3000/transaction',data,this.gettoken())

}


delete(acno:any){
  return this.http.delete('http://localhost:3000/delete/'+acno,this.gettoken())
}


}

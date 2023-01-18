


  import { Component, OnInit } from '@angular/core';
  import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
  import { Router } from '@angular/router';
  import Swal from 'sweetalert2';
  import { StudentsService } from '../students.service';
  

  @Component({
    selector: 'app-dash',
    templateUrl: './dash.component.html',
    styleUrls: ['./dash.component.scss']
  })
  export class DashComponent implements OnInit {
    coursers: any;
    students: any;
    current: any;
    username:any
    img: any ;
    imageurl: any;
    images: any=[];
    fee:any
    teacher:any
    user:any
  acno=""
  pswd=""
  amnt=""
  alertWithSuccess(){  
    Swal.fire('Thank you...', 'You submitted succesfully!', 'success')  
  }  
  
      constructor(private sanitizer: DomSanitizer,private ds:StudentsService,private fs:FormBuilder ,private route:Router) {

  this.current=localStorage.getItem('currentUser')
  
  
  
     }
  
    ngOnInit(): void {
      // if(!localStorage.getItem('currentacno')){
      //   alert('Please login')
      //   this.route.navigateByUrl('')
      // }
      this.img=(data:any)=>{
      
        let TYPED_ARRAY =  new Uint8Array(data);
              
        var STRING_CHAR = TYPED_ARRAY.reduce((data, byte)=> {
          return data + String.fromCharCode(byte);
        }, '');
        let base64String = btoa(STRING_CHAR);
        this.imageurl =  this.sanitizer.bypassSecurityTrustResourceUrl(`data:image/png;base64, ${base64String}`);
      
      this.images.push(this.imageurl)
         
        };
        this.current=localStorage.getItem('currentUser')
        console.log('  this.current: ',   this.current);
        this.ds.getstudent(this.current).subscribe((result:any)=>{
          this.images=[]
     console.log('result.message: ', result.message);
       result.message.forEach((user:any) =>{ 
        //  console.log(' this.img  (user.img.data.data): ', user.img.data.data);
         this.img  (user.img.data.data)
       
        });
    
    
          this.students= result.message
    
      this.fee=this.students[0].fees
      this.username=this.students[0].firstname
      console.log('this.fee: ', this.fee);
   
      
      
          
          })



    }
    form = this.fs.group({
      acno:['',[Validators.pattern('[0-9]*')]],
      pswd:[''],
      amnt:['',[Validators.pattern('[0-9]*')]],
      
    })
    get f(){
      return this.form.controls
     }
    withdraw(){
   
      let acno =this.form.value.acno
      let pswd =this.form.value.pswd
  let amnt =this.form.value.amnt
  if(this.form.valid){
  
    var result = this.ds.withdraw(acno,pswd,amnt).subscribe((result:any)=>{
  
      if(result){
        // console.log('result: ', result);
        alert(`${result.message}`)
        this.form.reset()
      }
    },result=>{
    
      
      console.log(this.form.errors);
      
    }
      
     ) 
  }else{
      console.log(this.form.errors);
  }
    }
    deposit(){
      let acno =this.form.value.acno
      // console.log('acno: ', acno);
      let pswd =this.form.value.pswd
      // console.log('pswd: ', pswd);
  let amnt =this.form.value.amnt
  // console.log('amnt: ', amnt);
  var result = this.ds.deposit(acno,pswd,amnt).subscribe((result:any)=>{
  
    if(result){
      // console.log('result: ', result);
      alert(` ${result.message}`)
      this.form.reset()
    }
  },result=>{
  
    
    console.log(this.form.errors);
    
  }
    
   ) }
  
  
  data(){
      this.acno = localStorage.getItem('currentacno') ||' '
    
  }
  show(){
    // console.log('hii');
    this.acno =""
  }
  }
  


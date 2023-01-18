


import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { DatabaseServiceService } from '../database-service.service';
// import { NgxPaginationModule } from 'ngx-pagination';

import Swal from 'sweetalert2';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  @Input() item:any
  @Input() listStatus:any
  @Input() total:any
  @ViewChild('filertext')filtertext:any
  filter:any
  page:any=1
  users: any;
  coursers: any;
  students: any;
  teachermail: any;
  img: any ;
  imageurl: any;
  images: any=[];
  teacher:any
  
  constructor(private sanitizer: DomSanitizer,private ds:DatabaseServiceService,private fs:FormBuilder ,private route:Router) {
  
 
    // console.log(this.users);
    
  }
  
  ngOnInit(): void {
    console.log('listStatus: ',this.item);
   
      this.img=(data:any)=>{
      
        let TYPED_ARRAY =  new Uint8Array(data);
              
        var STRING_CHAR = TYPED_ARRAY.reduce((data, byte)=> {
          return data + String.fromCharCode(byte);
        }, '');
        let base64String = btoa(STRING_CHAR);
        this.imageurl =  this.sanitizer.bypassSecurityTrustResourceUrl(`data:image/png;base64, ${base64String}`);
      
      this.images.push(this.imageurl)
         
        };
        this.teachermail=localStorage.getItem('currentUser')
        this.ds.getstudent(this.teachermail).subscribe((result:any)=>{
          this.images=[]
     console.log('result.message: ', result.message);
       result.message.forEach((user:any) =>{ 
        //  console.log(' this.img  (user.img.data.data): ', user.img.data.data);
         this.img  (user.img.data.data)
       
        });
    
    
          this.students= result.message
          console.log('this.coursers: ', this.students);
      
   
      
      
          
          })

  }
  // key(event:any){

  //   if(event.key=='Backspace'){
     
  //    // console.log('this.filter: ', this.filtertext.nativeElement.innerHTML);
  //    this.ds.getcourse().subscribe((result:any)=>{
  //     console.log('result: ', result);
  //      // console.log('result: ',);
  //      this.coursers= result.message
  //      console.log('  this.coursers: ',   this.coursers);
  //    this.coursers=this.coursers.filter((re: any) =>{
  //    return re.className.toLocaleLowerCase().match(this.filter.toLocaleLowerCase())
  //  })
  //    })
   
  //  }
  //  // console.log('this.users: ', this.users);
    
   
  //  }
   search(){
    this.filter=this.filtertext.nativeElement.value;
    console.log(' this.filter: ',  this.filter);
  if(this.filter==""){
    
  this.ngOnInit()
  }else{
  
    
  this.students=this.students.filter((re: any) =>{
 
    console.log('re: ', re);
    return re.firstname.toLocaleLowerCase().match(this.filter.toLocaleLowerCase())
  })
  console.log('this.users: ', this.users);
  // console.log('this.users: ', this.users);
  }
  }

  key(event:any){

    if(event.key=='Backspace'){
     
      this.ds.getstudent(this.teachermail).subscribe((result:any)=>{
        this.images=[]
   console.log('result.message: ', result.message);
     result.message.forEach((user:any) =>{ 
      //  console.log(' this.img  (user.img.data.data): ', user.img.data.data);
       this.img  (user.img.data.data)
     
      });
  
  
        this.students= result.message
        console.log('this.coursers: ', this.students);
    
 
    
    
        
        })
     this.students=this.students.filter((re: any) =>{
     return re.firstname.toLocaleLowerCase().match(this.filter.toLocaleLowerCase())
   })
  
   }
   // console.log('this.users: ', this.users);
    
   
   }


   delete(i:any){
    console.log('i: ', i);
  
    let result=this.ds.deletestudent(i).subscribe((result:any)=>{
      if(result){
        Swal.fire({
          icon:'success',
          title:'You have successfully deleted!'
         } ).then(() => {
          this.filter=""
          this.ngOnInit() 
         })
      }
    },result=>{
      alert(result.error.message)
    })
  }


}

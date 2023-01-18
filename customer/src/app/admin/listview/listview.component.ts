import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { DatabaseService } from '../../services/database.service';
// import { NgxPaginationModule } from 'ngx-pagination';

import Swal from 'sweetalert2';
@Component({
  selector: 'app-listview',
  templateUrl: './listview.component.html',
  styleUrls: ['./listview.component.scss']
})
export class ListviewComponent implements OnInit {
  @Input() item:any
  @Input() listStatus:any
  @Input() total:any
  @ViewChild('filertext')filtertext:any
  filter:any
  page:any=1
  users: any;
  coursers: any;
  
  constructor(private ds:DatabaseService) {
    
    // console.log(this.users);
    
  }
  
  ngOnInit(): void {
  
    this.ds.getcourse().subscribe((result:any)=>{
     
      this.coursers= result.message
      console.log('this.coursers: ', this.coursers);
  
  
  
  
  
        // // console.log('TYPED_ARRAY: ', TYPED_ARRAY);
        // // console.log('STRING_CHAR: ', STRING_CHAR);
        // console.log('base64String: ', base64String);
        // console.log('imageurl: ', this.imageurl);
  
  
        // console.log('this.users: ', this.users);
      
      })
  }
  key(event:any){

    if(event.key=='Backspace'){
     
     // console.log('this.filter: ', this.filtertext.nativeElement.innerHTML);
     this.ds.getcourse().subscribe((result:any)=>{
      console.log('result: ', result);
       // console.log('result: ',);
       this.coursers= result.message
       console.log('  this.coursers: ',   this.coursers);
     this.coursers=this.coursers.filter((re: any) =>{
     return re.className.toLocaleLowerCase().match(this.filter.toLocaleLowerCase())
   })
     })
   
   }
   // console.log('this.users: ', this.users);
    
   
   }
   search(){
    this.filter=this.filtertext.nativeElement.value;
  if(this.filter==""){
    
  this.ngOnInit()
  }else{
  
    
  this.coursers=this.coursers.filter((re: any) =>{
    return re.className.toLocaleLowerCase().match(this.filter.toLocaleLowerCase())
  })
  console.log('this.users: ', this.users);
  // console.log('this.users: ', this.users);
  }
  }


  delete(i:any){
    console.log('i: ', i);
  
    let result=this.ds.removeclass(i).subscribe((result:any)=>{
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

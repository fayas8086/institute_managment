import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { DatabaseService } from 'src/app/services/database.service';
import Swal from 'sweetalert2';
import { DatabaseServiceService } from '../database-service.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {
  img:any
  imageurl: any;
  sanitizer: any;
  images: any;
  selected:any;
  selecetedFile: any;
  type: any='male';
  coursers: any;
  fees: any;
  class:any

  constructor(public modalRef: MdbModalRef<AddStudentComponent>,private fb:FormBuilder,private ds:DatabaseServiceService ,private ads:DatabaseService ,private route:Router,) {}

  ngOnInit(): void {
    this.class=localStorage.getItem('course')
    this.ads.getcourse().subscribe((result:any)=>{
     
      this.coursers= result.message
      // console.log('this.coursers: ', this.coursers);
      let course = this.coursers.find((o: { className: string; }) => o.className ==this.class );
      console.log('course: ', course);
    this.fees=course.fees;
    localStorage.setItem('fees',this.fees)

    // console.log('  this.fees: ',   this.fees);
  
      })


    this.img=(data:any)=>{
      
      let TYPED_ARRAY =  new Uint8Array(data);
            
      var STRING_CHAR = TYPED_ARRAY.reduce((data, byte)=> {
        return data + String.fromCharCode(byte);
      }, '');
      let base64String = btoa(STRING_CHAR);
      this.imageurl =  this.sanitizer.bypassSecurityTrustResourceUrl(`data:image/png;base64, ${base64String}`);
    
    this.images.push(this.imageurl)
       
      };
  }
  formGroup=this.fb.group({
    email:['',[Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),Validators.required]],
    lastname:['',[Validators.required,Validators.pattern('[0-9]*')]],
    firstname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    gender:[''],
    address:[''],
    password:['',[Validators.required]],
   
       })
    get f(){ return this.formGroup.controls;}

  close(reason:any): void {
    const closeMessage = 'Modal closed';
    this.modalRef.close(closeMessage)
  }



add(){

console.log('this.fees: ', this.fees);
 
  var email =this.formGroup.value.email
  var password =this.formGroup.value.password
  var firstname =this.formGroup.value.firstname
  var lastname =this.formGroup.value.lastname
  var address =this.formGroup.value.address
  var gender =this.type
  
  if(this.formGroup.valid){
 
      // this.fees=localStorage.getItem('fees')
      // console.log('this.fees: ', this.fees);
      this.ds.add(email,password,firstname,lastname,address,gender,this.selecetedFile,this.fees).subscribe((result)=>{
  
        console.log('result: ', result);
      
        Swal.fire(
          'Good job!',
          'You have successfully registered!',
          'success'
        ).then(() => {
          location.reload();
          this.ngOnInit() 
         })
      },()=>{
         Swal.fire({
            icon: 'error',
            title: 'student with same mail already exist ',
           
          })
      })



}
   
  
}



image(event:any){
 
  this.selecetedFile=<File>event.target.files[0]
  console.log('selecetedFile: ', this.selecetedFile);

}
onChange(e:any) {
  this.type= e.target.value;
  // console.log('this.type: ', this.type);
}

}
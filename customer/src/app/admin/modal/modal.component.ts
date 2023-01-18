

import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { DatabaseService } from '../../services/database.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor(public modalRef: MdbModalRef<ModalComponent>,private fb:FormBuilder,private ds:DatabaseService ,private route:Router,) {}

  ngOnInit(): void {
  }

  formGroup=this.fb.group({
    className:['',[Validators.pattern('[a-zA-Z]*'),Validators.required]],
    fees:['',[Validators.required,Validators.pattern('[0-9]*')]],

    description:[''],
   
       })
    get f(){ return this.formGroup.controls;}


  close(): void {
    const closeMessage = 'Modal closed';
    this.modalRef.close(closeMessage)
  }
add(){
  var fees =this.formGroup.value.fees
  var className =this.formGroup.value.className
  var description =this.formGroup.value.description

  if(this.formGroup.valid){
this.ds.addClass(fees,className,description).subscribe((result: any)=>{
  console.log('result: ', result);

  Swal.fire(
    'Good job!',
    'You have successfully registered!',
    'success'
  ).then(() => {
    this.formGroup.reset()
    
    this.close(); 
    this.ngOnInit()
    window.location.reload();
   })
},result=>{
   Swal.fire({
      icon: 'error',
      title: 'class already exist',
     
    })

})}
}
}
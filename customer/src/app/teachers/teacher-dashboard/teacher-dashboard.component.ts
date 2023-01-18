

import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatSidenav } from '@angular/material/sidenav';
import { DomSanitizer } from '@angular/platform-browser';
import Swal from 'sweetalert2';
import { DatabaseServiceService } from '../database-service.service';
import { StudentListComponent } from '../student-list/student-list.component';
import { AddStudentComponent } from '../add-student/add-student.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-teacher-dashboard',
  templateUrl: './teacher-dashboard.component.html',
  styleUrls: ['./teacher-dashboard.component.scss']
})
export class TeacherDashboardComponent implements OnInit {






  modalRef: MdbModalRef<AddStudentComponent> | null = null;
  @ViewChild('sidenav')sidenav!: MatSidenav;
  images:any=[]
email:any
  reason = '';
  imageurl:any;
  @ViewChild('studentlist') componentB:any=StudentListComponent
  @ViewChild('myInput')myInputVariable:any= ElementRef 
   @ViewChild('filertext')filtertext:any
  @Input() item:any
  selecetedFile:any
  index: any=0;
  firstname: any;
  lastname: any;
  id: any;
  gender: any;
  temp:any
  course: any;
  students: any;
  self:any
  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }
  type:any='male';
  users:any
  coursers:any
  totalRecords:any;
  page:any=1
  SelectedCourse:any
  selected:any='not asigned'

  filter:any
  showFiller = false;
  uptdStatus:any=false
  newStatus:any=true;
  viewStatus:any=false
  start:any=true
 img:any
 class:any
 teachermail:any
 listStatus:any=false;
  constructor(private modalService: MdbModalService,private sanitizer: DomSanitizer,private ds:DatabaseServiceService,private fb:FormBuilder) {
  
 



}
openModal() {   this.modalRef = this.modalService.open(AddStudentComponent, {
})
}

// console.log('this.users: ', this.users);
// console.log(this.users);

   



   formGroup=this.fb.group({
    email:['',[Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),Validators.required]],
    lastname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    firstname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    gender:[''],
    address:[''],
    password:['',[Validators.required]],
   
       })
    get f(){ return this.formGroup.controls;}

  ngOnInit(): void {
    this.selected='not assaigned'
    this.self=localStorage.getItem('currentUser')
    this.class=localStorage.getItem('course')

  }

view(t:any){
  
  console.log(t);
  this.viewStatus=true;
  this.newStatus=false;
  this.uptdStatus=false
  this.firstname=t.firstname
  this.lastname=t.lastname
  this.email=t.email
  localStorage.setItem('email',this.email)
    this.index = this.users.findIndex((a: { firstname: any; }) => a.firstname === this.firstname)
   this.id=t.id
    let email=document.getElementById('email')?.innerHTML==""?t.email:' '
    let lastname=document.getElementById('lastname')?.innerHTML==""?t.lastname:' '
    let firstname=document.getElementById('lastname')?.innerHTML==""?t.firstname:' '
    let address=document.getElementById('lastname')?.innerHTML==""?t.address:' '
    let password=document.getElementById('password')?.innerHTML==""?t.password:' '
    this.course =t?.course
    // let email=document.getElementById('email')?.innerHTML==""?t.email:' '
    // console.log('email: ', ema);
    this.formGroup.get('email')?.setValue(email);
    this.formGroup.get('lastname')?.setValue(lastname);
    this.formGroup.get('firstname')?.setValue(firstname);
     this.type=t.gender
    this.formGroup.get('gender')?.setValue(this.type);
    
    this.formGroup.get('password')?.setValue(password);
    this.formGroup.get('address')?.setValue(address);
  }


uptd(t:any){
console.log(t);
this.firstname=t.firstname
this.lastname=t.lastname
this.viewStatus=false
this.uptdStatus=true
this.SelectedCourse=t?.course
  this.newStatus=false
  this.index = this.users.findIndex((a: { firstname: any; }) => a.firstname === this.firstname)
 this.id=t._id
  // let email=document.getElementById('email')?.innerHTML==""?t.email:t.email
  // let lastname=document.getElementById('lastname')?.innerHTML==""?t.lastname:t.lastname
  // let firstname=document.getElementById('lastname')?.innerHTML==""?t.firstname:t.firstname
  // let address=document.getElementById('lastname')?.innerHTML==""?t.address:t.address
  // let password=document.getElementById('password')?.innerHTML==""?t.password:t.password
  // let email=document.getElementById('email')?.innerHTML==""?t.email:' '
  // console.log('email: ', ema);
  this.formGroup.get('email')?.setValue(t.email);
  this.formGroup.get('lastname')?.setValue(t.lastname);
  this.formGroup.get('firstname')?.setValue(t.firstname);
   this.type=t.gender
  this.formGroup.get('gender')?.setValue(this.type);
  
  this.formGroup.get('password')?.setValue(t.password);
  this.formGroup.get('address')?.setValue(t.address);
}
update(){
  var email =this.formGroup.value.email
  var password =this.formGroup.value.password
  var firstname =this.formGroup.value.firstname
  var lastname =this.formGroup.value.lastname
  var address =this.formGroup.value.address
 var id =this.id
//  console.log('id: ', id);
 var gender=this.type
 if(this.formGroup.valid){
  this.ngOnInit() 

} else{
    Swal.fire({
      icon: 'error',
      title: 'Please fill form ',
     
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

new(){
 
  this.ngOnInit();
this.uptdStatus=false
  this.newStatus=true
  this.myInputVariable.nativeElement.value = "";

  this.viewStatus=false
  this.formGroup.get('email')?.setValue('');
  this.formGroup.get('lastname')?.setValue('');
  this.formGroup.get('firstname')?.setValue('');
  this.formGroup.get('address')?.setValue('');

  this.formGroup.get('gender')?.setValue('');
  this.formGroup.get('password')?.setValue('');
}



list(){
  this.componentB.ngOnInit();
  this.ngOnInit();
  this.listStatus=true;
  this.start=false
  console.log('  this.listStatus: ',   this.listStatus);
  this.newStatus=false
}
search(){
  this.filter=this.filtertext.nativeElement.value;
if(this.filter==""){
  
this.ngOnInit()
}else{

  
this.users=this.users.filter((re: any) =>{
  return re.firstname.toLocaleLowerCase().match(this.filter.toLocaleLowerCase())
})
console.log('this.users: ', this.users);
// console.log('this.users: ', this.users);
}
}
key(event:any){

//  if(event.key=='Backspace'){
  
//   // console.log('this.filter: ', this.filtertext.nativeElement.innerHTML);
//   this.ds.getusers().subscribe((result:any)=>{
//     // console.log('result: ',);
//     this.users= result.message
//   this.users=this.users.filter((re: any) =>{
//   return re.firstname.toLocaleLowerCase().match(this.filter.toLocaleLowerCase())
// })
//   })

// }
// console.log('this.users: ', this.users);
 

}
delete(){
  
}
 }

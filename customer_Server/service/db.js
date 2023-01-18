const mongoose = require('mongoose')
mongoose.set('strictQuery', true);
mongoose.connect("mongodb://127.0.0.1:27017/customer",{
    useNewUrlParser:true
}) .then(() => console.log("Database connected!"))
.catch(err => console.log(err));
console.log('hello');


const user = mongoose.model('teachers',{
    firstname:String,
    lastname:String,
    email:String,
    password:String,
    address:String,
    gender:String,
    img:{data:Buffer,contentType: String},course:String
},'teachers' )
const student = mongoose.model('students',{
    firstname:String,
    lastname:String,
    email:String,
    password:String,
    address:String,
    gender:String,
    img:{data:Buffer,contentType: String},course:String,teacher:String,fees:Number
},'students' )
const classes = mongoose.model('class',{
    fees:String,
    className:String,
    description:String,
  
},'class' )
const admin = mongoose.model('admin',{
 
    username:String,
    password:String,

},'admin' )


module.exports ={
    user,admin,classes,student
}
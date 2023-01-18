const db =require('./db')
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken");


  const login =async (acno,pswd) =>{
    const user = await db.user.findOne({ email:acno })

      if(user){
      return db.user.findOne({email:acno ,password:pswd}).then( user =>{

        if(user){
          const token = jwt.sign(acno,'shajmil2022')
          
          return {
          currentuser: user.email,
          statuscode:200,
          status: 'success',
          message:' account login sucess',
          acno,
          course:user.course,
          token
        }
         
        
        }
        else{
          return {
            statuscode:401,
            status: 'fail',
            message:'  password incorrect'
          }
        }
        
      })
    }
        else{
            return {
                statuscode:401,
                status: 'fail',
                message:' user not found'
              
            
            }
            
          }
        }
         const showstudent=(teacher)=>{
          console.log('teacher: ', teacher);
          return db.student.find({ "teacher": teacher } ).then(users=>{
              // console.log('users: ', users);
              if(users){
  
           
              return {
                  statuscode:200,
                  status: 'success',
                  message:users
                }
              }
  
      })}
     
      const add = (firstname,lastname,email,password,address,gender,final_img,course,teacher,fees)=>{
        console.log('teacher: ', teacher);
        // console.log('final_img: ', final_img);
        //   console.log('gender: ', gender);
        //   console.log('address: ', address);
        //   console.log('password: ', password);
        //   console.log('email: ', email);
        //   console.log('lastname: ', lastname);
        //   console.log('firstname: ', firstname);
          return db.student.findOne({email}).then(users=>{
        
         
            if(users){
              console.log('users: ', users);
              // alert('already exist')
              return {
                statuscode:401,
                status: 'fail',
                message:' Customer already exist'
              }
            }else{
             const newUser= new db.student( {
                 firstname,
                 lastname,
                 email,
                 password,address,gender,img:final_img,course,teacher,fees
                 
              }, )  
               newUser.save()
              return {
                statuscode:200,
                status: 'success',
                message:' Customer created'
              }
            }
          
          }
          ) }

          const deletestudent=(student)=>{
     
    
            return db.student.deleteOne({ email:student}).then(users=>{
              
                // console.log('users: ', users);
                return {
                    statuscode:200,
                    status: 'success',
                    message:users
                  }
        }
        )
      }

        module.exports = {
            add,login,showstudent,deletestudent
            }
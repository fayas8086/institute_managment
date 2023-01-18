const express = require('express')
const app = express()
const ds =require('./service/dataservice')
const sds =require('./service/studentservice')
const tds =require('./service/teacherdataservice')
const db =require('./service/db')
const cors = require('cors')
const fs = require("fs")
const multer = require("multer")
app.use(express.json())
const bcrypt = require("bcryptjs")
app.use(cors({
    origin:'http://localhost:4200'
    
    }))
    // app.use(function(req, res, next) {
    //     res.header("Access-Control-Allow-Origin", "*");
    //     res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
    //     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    //     next();
    //   });

    app.listen(3000,()=>{
        console.log('sucess');
        })
   

        
        var storage = multer.diskStorage({
            destination: function (req, file, cb) {
              cb(null, 'uploads')
            },
            filename: function (req, file, cb) {
              cb(null, file.fieldname + '-' + Date.now())
              console.log('file.fieldname: ', file.fieldname);
            }
          })
          var upload = multer({ storage: storage })
          

//admin

        app.post('/login',async (req,res)=>{
            try {
        
                ds.login(req.body.acno,req.body.pswd).then(result=>{
                    // res.json(result)
                    
                    res.status(result.statuscode).json(result)})
              } catch (error) {
                // console.log(error);
                res.status(500).send("Internal Server error Occured");
              }
            })    
             
        app.post('/register',async (req,res)=>{
            try {
                const hashedPwd = await bcrypt.hash(req.body.password, 10);
                console.log('hashedPwd: ', hashedPwd);
                ds.signUp(req.body.username,hashedPwd).then(result=>{res.status(result.statuscode).json(result)})
        
              } catch (error) {
                console.log(error);
                res.status(500).send("Internal Server error Occured");
              }
            })

        app.post('/add',upload.single('file'),(req,res)=>{
            console.log('  req.body: ',   req.body);    
            var img = fs.readFileSync(req.file.path);
             var encode_img = img.toString('base64');
            var final_img = {
                data:new Buffer.from(encode_img,'base64'),
                contentType:req.file.mimetype,
            };
            ds.add(req.body.firstname,req.body.lastname,req.body.email,req.body.password,req.body.address,req.body.gender,final_img,req.body.course)
            .then(result=>{
             res.status(result.statuscode).json(result)}) })

        app.post('/addclass',(req,res)=>{
            ds.addClass(req.body.fees,req.body.className,req.body.description)
            .then(result=>{
                res.status(result.statuscode).json(result)})  })

        app.patch('/update',(req,res)=>{
            ds.update(req.body.id,req.body.firstname,req.body.lastname,req.body.email,req.body.password,req.body.address,req.body.gender,req.body.SelectedCourse)
            .then(result=>{ console.log('req.body.password: ', req.body.password);
            res.status(result.statuscode).json(result)}) })


        app.get('/showcust',(req,res)=>{ds.showcust()
            .then(result=>{ res.status(result.statuscode).json(result)  })  })


        app.get('/getcourse',(req,res)=>{
            ds.getcourse()
            .then(result=>{
                  res.status(result.statuscode).json(result) })})

        app.delete('/deleteClass/:className',(req,res)=>{
            ds.deleteClass(req.params.className ).then(result =>{
                res.status(result.statuscode).json(result) })})

        app.delete('/deleteCus',(req,res)=>{
            let email=req.headers['email']
            console.log('email: ', email);
            console.log('res: ', req.body);
           ds.deleteCus(email).then(result=>{
            res.status(result.statuscode).json(result)}) })


//teacher 


      app.post('/Teacherlogin',async (req,res)=>{
      try {

        tds.login(req.body.acno,req.body.pswd).then(result=>{
            // res.json(result)
            
            res.status(result.statuscode).json(result)})
          } catch (error) {
        // console.log(error);
        res.status(500).send("Internal Server error Occured");
          }
        })   
    
    app.post('/showstudent',(req,res)=>{
      
      console.log('req.body: ', req.body);
      tds.showstudent(req.body.teacher)
      .then(result=>{ res.status(result.statuscode).json(result)  })  })

      app.post('/addstudent',upload.single('file'),(req,res)=>{
        console.log('  req.body: ',   req.body);    
        var img = fs.readFileSync(req.file.path);
         var encode_img = img.toString('base64');
        var final_img = {
            data:new Buffer.from(encode_img,'base64'),
            contentType:req.file.mimetype,
        };
        tds.add(req.body.firstname,req.body.lastname,req.body.email,req.body.password,req.body.address,req.body.gender,final_img,req.body.course,req.body.teacher,req.body.fees)
        .then(result=>{
         res.status(result.statuscode).json(result)})  })
 
         app.delete('/deletestudent/:student',(req,res)=>{
          tds.deletestudent(req.params.student ).then(result =>{
              res.status(result.statuscode).json(result) })})
//student



app.post('/studentlogin',(req,res)=>{

  sds.login(req.body.acno,req.body.pswd).then(result=>{
  // res.json(result)
  
  res.status(result.statuscode).json(result)})
  // if(result){
  //     res.send('success')
  
  // }
  // else{
  //     req.send('fail')
  // }
  })
         
    app.post('/getstudent',(req,res)=>{
      
      console.log('req.body: ', req.body);
      sds.showstudent(req.body.mail)
      .then(result=>{ res.status(result.statuscode).json(result)  })  })
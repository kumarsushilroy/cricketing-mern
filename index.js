
 const express = require('express');
 const dotenv = require('dotenv');
 const cors = require('cors');
 const path = require('path')

 dotenv.config();

 const app = express();

 const PORT = process.env.PORT || 4000

 // Routers
 const userRoute = require('./Routes/UserRoute')
 const playerRoute = require('./Routes/PlayerRoute')
 
 
const connect = require('./Connection');

//  app.get('/get',(req,res)=>{
//     res.send({msg:'true'})
//  })

 //Middle ware 
 app.use(express.json()) 
 app.use(cors());

 //static file
 app.use(express.static(path.join(__dirname , './client/build')))
 
 app.use(userRoute); 
 app.use(playerRoute);
 
 app.get('*',(req,res)=>{
   res.sendFile(path.join(__dirname , './client/build/index.html'))
 })
 
 app.listen(PORT,()=>{
    console.log(`server is listening to the port ${PORT}`);
    connect();
 })
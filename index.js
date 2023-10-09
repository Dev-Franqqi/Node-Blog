const express = require('express');
const morgan = require('morgan');   
const mongoose = require('mongoose');
const Blog = require('./modules/blog');
const { concat } = require('lodash');
require("dotenv").config();


const router = require('./routes/routes')
//express app
const app = express();
// connect to mongoDB
const dbuii =process.env.MONGODB_URL
mongoose.connect(dbuii,{useNewUrlParser:true, useUnifiedTopology:true})
.then((result)=>{
        

    console.log('connected to the database');
    app.listen(process.env.PORT);

     

    
}).catch((err)=>{
    
        console.log(err)
    
})
//register view engine
app.set('view engine', 'ejs');



// middleware and static files 
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}));

app.use(morgan('dev'));





//routes
app.use('/',router)

const express = require('express');
const morgan = require('morgan');   
const mongoose = require('mongoose');
const Blog = require('./modules/blog');
const { concat } = require('lodash');

const router = require('./routes/routes')
//express app
const app = express();
// connect to mongoDB
const dbuii ='mongodb+srv://DEV-FRANQQI:franky%401@nodetut.h8xvxby.mongodb.net/nodetut?retryWrites=true&w=majority'
mongoose.connect(dbuii,{useNewUrlParser:true, useUnifiedTopology:true})
.then((result)=>{
        

    console.log('connected to the database');
    app.listen(3000);

     

    
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

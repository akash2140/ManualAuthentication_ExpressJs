const express=require('express');
const port = 8000;
const cookieParser=require('cookie-parser');
//const expressLayouts=require('express-ejs-layouts');
const app=express();
const expressLayouts = require('express-ejs-layouts');

//requiring mongoose
const db=require('./config/mongoose');


//layout settings
app.use(expressLayouts);
app.use(express.urlencoded());
app.use(cookieParser());
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

//setting static folder
app.use(express.static('./assests'));

//setting the template engine
app.set('view engine','ejs');
app.set('views','./views');

//Setting the route index file
app.use('/',require('./routes/index'));

app.listen(port, function(err){
    if(err){
        console.log(`Error in starting the server on port ${port} with error ${err}`);
        return;
    }
    console.log(`Server is up & running on port ${port}`);
});
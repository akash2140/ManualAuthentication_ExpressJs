const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/socialmedial_db');

const db=mongoose.connection;

db.on('error', console.error.bind(console,'connection error'));

db.once('open',function(){
    console.log('Successfully conected to DB');
});

module.exports=db;
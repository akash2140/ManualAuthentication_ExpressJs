const express=require('express');
const router=express.Router();

//Importing the home Controller
const homeController=require('../controllers/home_controller');
router.get('/',homeController.home);

//Using the user_controller.js
router.use('/users',require('./user'));

module.exports=router;



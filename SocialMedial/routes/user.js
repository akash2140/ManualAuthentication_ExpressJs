const express=require('express');
const router=express.Router();
const userController=require('../controllers/user_controller');

router.get('/sign-up',userController.signUp);
router.get('/sign-in',userController.signIn);
router.get('/profile',userController.profile);

router.post('/create-account',userController.createAccount);   
router.post('/create-session',userController.createSession);     

module.exports=router;
const User=require('../model/user');

module.exports.profile=function(req,res)
{
    if(req.cookies.user_id)
    {    
        User.findById(req.cookies.user_id, function(err,user){
            if(err){
                console.log('error in finding the user in signing in');
                return;
            }

            if(user){
                console.log('User Found');
                    return   res.render('user_profile',{
                        title:"Profile Page",
                        user:user
                    });
            }
            else{
                console.log('User doesnt exist');
                return res.render('user_sign_in');
            }

        });

    }
    else{
       return res.render('user_sign_in');
    }



    //return res.render('user_profile',{});
}


module.exports.signUp=function(req,res){
    return res.render('user_sign_up',{
        title:"SocialMedial | Sign Up"
    });
};


module.exports.signIn=function(req,res){
    return res.render('user_sign_in',{
        title:"SocialMedial | Sign In"
    });
};


module.exports.createAccount=function(req,res){
    //todo
    if(req.body.password!= req.body.confirm_password){
        return res.redirect('back');
    }

    User.findOne({email: req.body.email},function(err,user){
        
        if(err){
            console.log('error in finding the user');
            return;
        }

        if(!user){
            User.create(req.body,function(err,body){
                if(err){
                    console.log('error in creating the user');
                    return;
                }
                console.log('User created');
                return res.redirect('/users/sign-in');
            });
        }
        else{
            console.log('User already exists');
            return res.redirect('back');
        }
    });

}



module.exports.createSession=function(req,res)
{
    //todo
    //Find the User
    User.findOne({email: req.body.email},function(err,user){
        if(err){
            console.log('error in finding the user in signin');
            return;
        }

        if(user){
            //Handle password Incorrect situation
            if(user.password != req.body.password){
                console.log('Incorrect password ,Kindly try Again');
                return res.redirect('back');
            }

            res.cookie('user_id',user.id);
            return res.redirect('/users/profile');
        }
        else{
            console.log('User not found ');
            return res.redirect('back');
        }

    });
}

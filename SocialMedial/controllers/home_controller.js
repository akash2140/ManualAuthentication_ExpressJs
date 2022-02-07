module.exports.home=function(req,res)
{
    console.log(req.cookies);
    res.cookie('user_id',200);
    return res.render('home',{
        title:"Social Medial App"
    });
}
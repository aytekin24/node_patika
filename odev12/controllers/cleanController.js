const Clean=require('../models/Clean');

exports.getAllCleans = async (req,res)=>{
    const cleans=await Clean.find({});
    res.render('index',{
        cleans
    });
}
exports.getClean=async (req,res)=>{
    const post= await Clean.findById(req.params.id);
    res.render('post',{
        post
    });
}
exports.createClean=async (req,res)=>{
    await Clean.create(req.body);
    res.redirect('/');
}
exports.updateClean=async (req,res)=>{
    const post=await Clean.findOne({_id:req.params.id});
    post.title=req.body.title;
    post.detail=req.body.detail;
    post.save();
    res.redirect(`/posts/${req.params.id}`);
}
exports.deleteClean=async (req,res)=>{
    const post=await Clean.findByIdAndDelete(req.params.id);
    res.redirect('/');
}
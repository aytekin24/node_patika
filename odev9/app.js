const express=require('express');
const mongoose=require('mongoose');
const ejs=require('ejs');
const path=require('path');
const Clean=require('./models/Clean');
const app=express();

mongoose.connect('mongodb://localhost:27017/cleanblog-test-db');

app.set('view engine','ejs');
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/',async(req,res)=>{
    const cleans =await Clean.find({})
    res.render('index',{
        cleans:cleans
    });
});
app.get('/about',(req,res)=>{
    res.render('about');
});
app.get('/add_post',(req,res)=>{
    res.render('add_post');
});
app.get('/post',(req,res)=>{
    res.render('post');
});
app.post('/cleans',async(req,res)=>{
    await Clean.create(req.body);
    res.redirect('/');
})
const port=3000;
app.listen(port,()=>{
    console.log(`Sunucu ${port} portunda başlatıldı`);
})
const express=require('express');
const mongoose=require('mongoose');
const methodOverride=require('method-override');
const ejs=require('ejs');
const path=require('path');
const { title } = require('process');
const app=express();
const cleanController=require('./controllers/cleanController');
const pageController=require('./controllers/pageController');

mongoose.connect('mongodb+srv://aytekin24:YhoVBXw7gj1dLWSF@cluster0.s0zdi.mongodb.net/cleanblog?retryWrites=true&w=majority&appName=Cluster0')
.then(()=>{
    console.log('db connected');
}).catch((err)=>{
    console.log(err);
});

app.set('view engine','ejs');
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(methodOverride('_method',{
    methods:['POST','GET']
}));

app.get('/',cleanController.getAllCleans);
app.get('/posts/:id',cleanController.getClean);
app.post('/cleans',cleanController.createClean);
app.put('/posts/:id',cleanController.updateClean);
app.delete('/posts/:id',cleanController.deleteClean);

app.get('/about',pageController.getAboutPage);
app.get('/add_post',pageController.getAddPage);
app.get('/post',pageController.getPostPage);
app.get('/posts/edit/:id',pageController.getEditPage);

const port=process.env.PORT ||5000;
app.listen(port,()=>{
    console.log(`Sunucu ${port} portunda başlatıldı`);
})
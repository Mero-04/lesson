const express = require('express')
const app = express()

app.set('view engine','ejs');
app.use(express.static('public'));




app.get('/',(req,res)=>{
    res.render('index', {title:'Home'});
})
app.get('/about',(req,res)=>{
    res.render('about', {title:'About'});
})

app.get('/about-us',(req,res) =>{
    res.redirect('/about');
})
app.use((req,res)=>{
    res.status(404).render('404', {title:'Page not found'});
})

app.listen(3001)
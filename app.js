const express = require('express')
const morgan = require('morgan')
const mysql = require('mysql')

const app = express()

const db = mysql.createConnection({
    host: "localhost",
    user:"root",
    database:"test"
});

db.connect((err) => {
    if(err) throw err;
    console.log("Success Connection");
})

app.set('view engine','ejs');
app.use(express.static('public'));
app.use(morgan('dev'));





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
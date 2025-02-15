const express = require('express');
const mysql = require('mysql2');

const app=express();
const PORT= 4000;

const db=mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    database:'college_db',
    password:'1@Narsimha'
})

db.connect((err) =>{
    if(err){
        console.log('database connection error!!',err)
        return;
    }
    else{
        console.log('connected to mysql')
    }
})

app.get('/',(req, res) =>{
    res.send('hari bol......');
});

app.listen(PORT, () =>{
     console.log(`connected successflly  ${PORT}`);
});
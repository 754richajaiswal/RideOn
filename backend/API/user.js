const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'1@Narsimha',
    database:'project_cab'
});

db.connect((err) =>{
   if(err){
    console.log('Database Connection Error!!!');
    return;
   }
   console.log('Connected to MySql...');
})

// app.get('/',(req,res) =>{
//     res.send('first connection by myself...');
// });

app.post('/submit',(req,res) =>{
    const{first_name, last_name, email, phone, password, role}=req.body;
    const sqlQuery = 'INSERT INTO user(first_name,last_name,email,phone,password,role)values(?,?,?,?,?,?)';
    db.query(sqlQuery,[first_name,last_name,email,phone,password, role],(err,result) =>{
        if(err){
           console.error('Database Error!!',err);
           return res.status(500).send('Internal Server Error!!');
        }
           res.status(200).send('Data Added Successfully...');
    });
});

app.get('/all_users',(req,res) =>{
    const sqlQuery = 'SELECT user_id, first_name, last_name, email, phone, password, role  FROM user';
    db.query(sqlQuery,(err,result) =>{
        if(err) throw err;
        res.json(result);
    });
});

app.get('/user/:user_id',(req,res) =>{
    const {user_id} = req.params;
    const sqlQuery = 'SELECT user_id, first_name, last_name, email, phone, password, role FROM user WHERE user_id=?';

    db.query(sqlQuery,[user_id],(err,result) =>{
        if(err){
            return res.status(500).json({error:err});
        }
        if(result.length==0){
            return res.status(404).json({Message:'user not found'});
        }
        res.json(result[0]);
    })
})

// login API
app.post('/user/login', (req, res) => {
    const { email, password} = req.body;
    
    const query = 'SELECT email, password, role, first_name, last_name, phone FROM user WHERE email = ? AND password = ?';
db.query(query, [email, password], (error, results) => {
    if (error) {
      console.error('Error executing query:', error);
      res.status(500).json({ success: false, message: 'Internal server error' });
    }
     if (results.length > 0) {
        const user = results[0];
      // send user details as response
      return res.json({ success: true, user });
    } else {
      // No user found
      res.status(401).json({ success: false, message: 'Invalid email or password' });
    }
  });
});

// fetch user profile details
app.get('/user/profile/:email', (req,res) => {
    const email = req.params.email;
    const query = 'SELECT first_name, last_name, email, phone FROM user WHERE email = ?'

    db.query(query, [email], (error, results) => {
        if(error) {
            console.error('Error fetching user details:', error);
            return res.status(500).json({success:false, message: 'Internal Server Error'})
        }
        if(results.length>0){
            return res.json({success:true, user: results[0]})
        } else {
            return res.status(404).json({success: false, message: 'User not found'})
        }
    });
});
  

app.listen(port, () =>{
    console.log(`Server is running at ${port}`);
    
})
const express = require('express');
const app = express();

const mysql = require('mysql2');
const PORT = 3000;

app.use(express.json());

const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '1@Narsimha',
    database: 'project_cab'
})

db.connect((err) =>{
    if(err){
        console.log('database connection error!!!');
        return;
    }
    console.log('Connected to MySQL...');
});

app.get('/all',(req,res) =>{
    const sqlQuery='SELECT driver_id, d_name, phone, license_number, vehicle_number, cab_type, availability_status FROM driver';
    db.query(sqlQuery, (err,results) =>{
        if(err) throw err;
        res.json(results);
            });
    // console.log('First API Done...!!!');

    
});

app.post('/submit',(req,res) =>{
    const{d_name,phone,license_number,vehicle_number,cab_type,availability_status}=req.body;
    const sqlQuery = 'INSERT INTO driver (d_name,phone,license_number,vehicle_number,cab_type,availability_status)values(?,?,?,?,?,?)';
    db.query(sqlQuery,[d_name,phone,license_number,vehicle_number,cab_type,availability_status],(err,results) =>{
        if(err){
            console.error('Database Error!!!',err);
            return  res.status(500).send('Internal Server Error!!!');
        }
        res.status(200).send('Data Added Successfully');
    });
});

app.get('/search/:driver_id',(req,res) =>{
   const{driver_id} = req.params;
   const sqlQuery = 'SELECT * FROM driver WHERE driver_id=?';
   db.query(sqlQuery,[driver_id],(err,result)=>{
    if(err){
        return res.status(500).json({error:err});
    }
    if(result.length==0){
        return res.status(404).json({message:'user not found!!'});
    }
    res.json(result[0]);
   })
})

app.post('/update/:driver_id',(req,res) =>{
    const { driver_id } = req.params;
    const { d_name, phone, cab_type, availability_status} = req.body;
    const sql= 'update driver set d_name=? , phone=?, cab_type=?, availability_status=? where driver_id =?';

    db.query(sql,[d_name, phone, cab_type, availability_status, driver_id], (err,result) =>{
     if(err){
        return res.status(500).json({error:err});
     };
     if (result.affectedRows === 0) {
        return res.status(404).json({message:'not found'});
     };
     return res.json({message:'updated..'})
    });
});

app.delete('/delete/:driver_id', (req,res) =>{
    const { driver_id } =req.params;
    const sql = 'delete from driver where driver_id =?';
    db.query(sql,[driver_id], (err,result) =>{
        if(err){
            return res.status(500).json({error:err});
        };
        if (result.affectedRows === 0){
            return res.status(404).json({message: 'not found!!'});
        };
        return res.json({message: 'Deleted..'})
    });
});
app.listen(PORT, ()=>{
    console.log(`Server is running on PORT ${PORT}`);
})
const express = require('express');
const app= express();
const mysql = require('mysql2');
const PORT = 3000;

app.use(express.json());

const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '1@Narsimha',
    database: 'project_cab'
});

db.connect((err) =>{
    if (err){
        console.log('Error connecting to database:')
        return;
    }
    console.log('connected to mysql database:')

})

app.get('/cab', (req, res) => {
    const sqlQuery = 'SELECT vehicle_id, vehicle_type, driver_id, license_no , is_available FROM cab';

    db.query(sqlQuery, (err,results) =>{
        if(err) throw err;
        res.json(results);
    });
    // res.send('connected to mysql');
});

app.get('/search/:vehicle_id', (req, res) => {
    const { vehicle_id } = req.params;
    const sql = 'SELECT * FROM cab WHERE vehicle_id = ?';
    db.query(sql, [vehicle_id], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err });
        }
        if (result.length === 0) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(result[0]);
    });
});

app.post('/Submit', (req, res) => {
    const { vehicle_id, vehicle_type, driver_id, license_no, is_available } = req.body;
    const sqlQuery = 'INSERT INTO cab (vehicle_id, vehicle_type, driver_id, license_no, is_available) VALUES (?, ?, ?, ?, ?)';

    db.query(sqlQuery, [vehicle_id,vehicle_type, driver_id, license_no, is_available], (err, results) => {
        if (err) {
            console.error('Database Error!!', err);
            return res.status(500).send('Internal server error');
        } else {
            res.status(201).send('Data Submitted Successfully..');
        }
    });
});

// Update a user
app.put('/update/:vehicle_id', (req, res) => {
    const { vehicle_id } = req.params;
    const { vehicle_type } = req.body;
    const sql = 'UPDATE cab SET vehicle_type = ? WHERE vehicle_id = ?';
    db.query(sql, [vehicle_type,vehicle_id], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'not found' });
        }
        res.json({ message: 'updated' });
    });
});

// Delete a user
app.delete('/delete/:vehicle_id', (req, res) => {
    const { vehicle_id } = req.params;
    const sql = 'DELETE FROM cab WHERE vehicle_id = ?';
    db.query(sql, [vehicle_id], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'not found' });
        }
        res.json({ message: 'deleted' });
    });
});




app.listen(PORT, () =>{
    console.log(`server is running on port ${PORT}`);
});



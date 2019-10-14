const express = require('express');
const router = express.Router();

const pool = require('../database/connection');

router.get('/', (request, response)=>{
    pool.query('SELECT * FROM tasks', (error, tasks, fields) => {
        if (error) throw error; 
        response.render('home', {
            tareas: tasks
        });
    });
});


router.post('/insertar', (req, res) => {
    let tarea = req.body;
    pool.query('INSERT INTO tasks SET ?', tarea, (error, results, fields) => {
        if (error) throw error;
        res.redirect('/');
    });
});



router.get('/contacto', (req, res) => {
    res.send({nombre: 'Humberto', apellido: 'Zapata'});
});


module.exports = router;
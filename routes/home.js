const express = require('express');
const router = express.Router();

const pool = require('../database/connection');

router.get('/', (request, response)=>{
    /* response.send('Hola mundo con nodemon'); */
    /* response.render('home'); */

    pool.query('SELECT * FROM tasks', (error, tasks, fields) => {
        if (error) throw error;
        console.log(tasks);
        response.render('home', {
            tareas: tasks
        });
    });
});

router.get('/contacto', (req, res) => {
    res.send({nombre: 'Humberto', apellido: 'Zapata'});
});


module.exports = router;
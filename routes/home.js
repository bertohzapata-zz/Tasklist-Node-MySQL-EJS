const express = require('express');
const router = express.Router();

router.get('/', (request, response)=>{
    /* response.send('Hola mundo con nodemon'); */
    response.render('home');
});

router.get('/contacto', (req, res) => {
    res.send({nombre: 'Humberto', apellido: 'Zapata'});
});


module.exports = router;
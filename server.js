const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

// Importar rutas
const homesRoutes = require('./routes/home');


//Servir carpetas de acceso público
app.use('/public', express.static(path.join(__dirname, 'public')));

// Configuraciones
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


// Midlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Usando rutas
app.use('/', homesRoutes);

app.listen(3001, ()=> {
    console.log('Servidor corriendo en le puerto 3001');
});
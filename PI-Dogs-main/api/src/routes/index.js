const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { allDogs, getAllTemperaments, searchById, postDogs, allDoggi } = require('./controllers')

const router = Router();
router.get('/dogs', allDoggi) 
router.get('/temperaments', getAllTemperaments)
router.get('/dogs/:id', searchById)
router.post('/dogs', postDogs)
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;

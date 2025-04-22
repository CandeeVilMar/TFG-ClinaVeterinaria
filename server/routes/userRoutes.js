const express = require('express');
const router = express.Router();
const {
    pagarSeguro,
    verHistorial,
    verAnimal,
    verInforme,

    loginVeterinario,
    atenderCliente,
    redactarInforme,
    mandarPruebas,
    recetarMedicamentos
} = require('../controllers/userController');

// Cliente
router.post('/cliente/pagar-seguro', pagarSeguro);
router.get('/cliente/historial/:idMascota', verHistorial);
router.get('/cliente/mascota/:idMascota', verAnimal);
router.get('/cliente/informe/:idConsulta', verInforme);

// Veterinario
router.post('/veterinario/login', loginVeterinario);
router.post('/veterinario/atender', atenderCliente);
router.post('/veterinario/informe', redactarInforme);
router.post('/veterinario/pruebas', mandarPruebas);
router.post('/veterinario/recetar', recetarMedicamentos);

module.exports = router;

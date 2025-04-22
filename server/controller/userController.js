// CONTROLADORES CLIENTE
exports.pagarSeguro = (req, res) => {
    const { idCliente, monto } = req.body;
    res.send(`Cliente ${idCliente} pagó ${monto} por seguro`);
};

exports.verHistorial = (req, res) => {
    const { idMascota } = req.params;
    res.send(`Historial de la mascota ${idMascota}`);
};

exports.verAnimal = (req, res) => {
    const { idMascota } = req.params;
    res.send(`Información de la mascota ${idMascota}`);
};


exports.verInforme = (req, res) => {
    const { idConsulta } = req.params;
    res.send(`Informe para la consulta ${idConsulta}`);
};

// CONTROLADORES VETERINARIO
exports.loginVeterinario = (req, res) => {
    const { usuario, contraseña } = req.body;
    res.send(`Veterinario ${usuario} se ha identificado`);
};

exports.atenderCliente = (req, res) => {
    const { idVeterinario, idCliente } = req.body;
    res.send(`Veterinario ${idVeterinario} atiende a cliente ${idCliente}`);
};

exports.redactarInforme = (req, res) => {
    const { idConsulta, contenido } = req.body;
    res.send(`Informe redactado para consulta ${idConsulta}`);
};

exports.mandarPruebas = (req, res) => {
    const { idMascota, tipoPrueba } = req.body;
    res.send(`Prueba de tipo ${tipoPrueba} mandada para mascota ${idMascota}`);
};

exports.recetarMedicamentos = (req, res) => {
    const { idMascota, medicamento } = req.body;
    res.send(`Medicamento ${medicamento} recetado a mascota ${idMascota}`);
};

// Crear un servidor con Express en el puerto 3000.

const express = require('express');
const app = express();

app.listen(3000, () => console.log("Servidor habilitado http://localhost:3000"));

// Definir la carpeta "assets" como carpeta pública del servidor.

app.use(express.static(`${__dirname}/assets/`));

// Crear en el servidor un arreglo de nombres y devolverlo en formato JSON a través de la ruta /abracadabra/usuarios.

let listado = {
    usuarios: ["Juan", "Jocelyn", "Astrid", "María", "Ignacia", "Javier", "Brian"]
};

app.get('/abracadabra/usuarios/', (req, res) => {
    res.json(listado)
});

// Crear un middleware con la ruta /abracadabra/juego/: usuario para validar que el usuario 
// recibido como parámetro "usuario" existe en el arreglo de nombres creado en el servidor.

// En caso de ser exitoso, permitir el paso a la ruta GET correspondiente, de lo contrario
// devolver la imagen "who.jpeg".


import {Usuario} from '../models/Usuario.js';

export const createUsuario = async (req, res) =>{
    try {
        const {nombre, apellidos, tiempoRegistro, activo, celular, contrasena, ultimoTokenAcceso, tiempoUltimoAcceso, otp, tiempoActivacion} = req.body;
        console.log(req.body)

        const newUsuario = await Usuario.create({
            nombre, 
            apellidos,
            tiempoRegistro,
            activo, 
            celular, 
            contrasena, 
            ultimoTokenAcceso, 
            tiempoUltimoAcceso, 
            otp, 
            tiempoActivacion
        });

    res.json(newUsuario)

    } catch (error) {
        console.log(error)
    }
}
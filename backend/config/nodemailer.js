import nodemailer from "nodemailer";
import keys from "./keys.js";


exports.sendMail = function(){
    const transporter = nodemailer.createTransport({
        service: "Gmail",
        auth:{
            user: keys.GMAIL.email,
            pass: keys.GMAIL.password
        }
    });

    const correo = {
        from: 'rmorenor97@gmail.com',
        to: 'ramorenorodriguez@gmail.com',
        subject: 'Este es un correo de prueba',
        text: 'A ver si nos sale el nodemailer a la primera jejejejej. EL USUARIO SE A REGISTRADO CORRECTAMENTE.'
    };

    transporter.sendMail(correo);
};
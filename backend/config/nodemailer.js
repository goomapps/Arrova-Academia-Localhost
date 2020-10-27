import nodemailer from "nodemailer";
import keys from "./keys.js";

//Esto esta mal aun hay que cambiar cosas pero estoy con el error.
 const sendEmail = function(req, res){
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

    const envioMensaje = function(){
        transporter.sendMail(correo);
    }
};
    export default sendEmail;
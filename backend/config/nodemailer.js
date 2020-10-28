import nodemailer from "nodemailer";
import keys from "./keys.js";


    // Definimos el transporter

    var transporter = nodemailer.createTransport({
        pool: true,
        host: "smtp.arrovacademia.es",
        port: "25",
        auth: {
            user: keys.GMAIL.email,
            pass: keys.GMAIL.password
        },
        tls: { 
            rejectUnauthorized: false 
        }
    });
    
    // Definimos el email
    var mailOptions = {
        from: 'Remitente',
        to: 'rmorenor97@gmail.com',
        subject: 'Arrova Academia',
        text: 'jodeeer'
    };
    // Enviamos el email
    /*var envio = function(){
    transporter.sendMail(mailOptions, function(error, info){});
    }*/

    export default transporter;
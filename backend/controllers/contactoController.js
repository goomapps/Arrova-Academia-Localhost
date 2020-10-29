import ContactoModel from "../models/contactoDTO.js";
import transporter from "../config/nodemailer.js"

const ContactoController = {
    async insert(req, res) {
        try {
            const contacto = await ContactoModel.create(req.body);
            const nombre = JSON.stringify(req.body.nombre);
            const correo = JSON.stringify(req.body.correo);
            const texto = JSON.stringify(req.body.texto);
            const mailOptions = {
                from: 'contacto@arrovacademia.es',
                to: 'contacto@arrovacademia.es',
                subject: 'Arrova Academia',
                html:   `<div style="width: 45em;">
                            <h3 style="color: black">Corrreo de contacto</h3>
                            <p style="color: black">Nombre: ${nombre}</p>
                            <p style="color: black;">Correo: ${correo}</p>
                            <p style="color: black; margin-left: 1em">Duda: ${texto}</p>
                        </div>`
                }
            transporter.sendMail(mailOptions);
            // TODO: CONVERTIR EL JSON QUE NOS VIENE DEL BODY A TEXTO PLANO
            // TODO: ENVIAR TEXTO PLANO A NUESTRO EMAIL DE CONTACTO -> CONTACTO@ARROVACADEMIA.ES
            res.status(201).send({
                message: "EL CONTACTO SE HA INSERTADO CON ÉXITO",
                contacto,
            });
        } catch (error) {
            console.error(error);
            res.status(500).send({
                message: "EL CONTACTO NO SE HA PODIDO INSERTAR",
                error,
            });
        }
    },
};

export default ContactoController;
import ContactoModel from "../models/contactoDTO.js";
import transporter from "../config/nodemailer.js";

const ContactoController = {
    async insert(req, res) {
        try {
            const contacto = await ContactoModel.create(req.body);
            const mailOptions = {
                from: 'contacto@arrovacademia.es',
                to: 'contacto@arrovacademia.es',
                subject: 'Arrova Academia',
                html:   `<div style="width: 45em;">
                            <h3 style="color: black">Corrreo de contacto</h3>
                            <p style="color: black">Nombre: ${contacto.nombre}</p>
                            <p style="color: black;">Correo: ${contacto.correo}</p>
                            <p style="color: black; margin-left: 1em">Duda: ${contacto.texto}</p>
                        </div>`
                }
            transporter.sendMail(mailOptions);
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

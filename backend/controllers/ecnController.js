import EcnModel from "../models/ecnDTO.js";
import transporter from "../config/nodemailer.js";

const EcnController = {
    async insert(req, res) {
        try {
            const ecn = await EcnModel.create(req.body);
            const mailOptions = {
                from: 'contacto@arrovacademia.es',
                to: 'contacto@arrovacademia.es',
                subject: 'Arrova Academia',
                html:   `<div style="width: 45em;">
                            <h3 style="color: black">Correo Estudia con nosotros</h3>
                            <p style="color: black">Parte1: ${ecn.parte1}</p>
                            <p style="color: black; margin-left: 1em">Comentario1: ${ecn.comentario1}</p>
                            <p style="color: black">Parte2: ${ecn.parte2}</p>
                            <p style="color: black; margin-left: 1em">Comentario2: ${ecn.comentario2}</p>
                            <p style="color: black">Parte3: ${ecn.parte3}</p>
                            <p style="color: black; margin-left: 1em">Comentario3: ${ecn.comentario3}</p>
                            <p style="color: black">Parte4: ${ecn.parte4}</p>
                            <p style="color: black; margin-left: 1em">Comentario4: ${ecn.comentario4}</p>
                            <p style="color: black">Correo: ${ecn.correo}</p>
                        </div>`
                }
            transporter.sendMail(mailOptions);
            res.status(201).send({
                message: "EL FORMULARIO DE ESTUDIA CON NOSOTROS SE HA INSERTADO CON ÉXITO",
                ecn,
            });
        } catch (err) {
            console.error(err);
            res.status(500).send({
                message: "EL FORMULARIO DE ESTUDIA CON NOSOTROS NO SE HA PODIDO INSERTAR",
                err,
            });
        }
    },
};

export default EcnController;

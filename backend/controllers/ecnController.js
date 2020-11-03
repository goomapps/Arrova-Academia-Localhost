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
                            <h3 style="color: black">Corrreo Estudia con nosotros</h3>
                            <p style="color: black">Curso valenciano: ${ecn.parte1}</p>
                            <p style="color: black; margin-left: 1em">Comentario: ${ecn.comentario1}</p>
                            <p style="color: black">Lengua materna: ${ecn.parte2}</p>
                            <p style="color: black; margin-left: 1em">Comentario: ${ecn.comentario2}</p>
                            <p style="color: black">Titulacion anterior: ${ecn.parte3}</p>
                            <p style="color: black; margin-left: 1em">Comentario: ${ecn.comentario3}</p>
                            <p style="color: black">Estudios: ${ecn.parte4}</p>
                            <p style="color: black; margin-left: 1em">Comentario: ${ecn.comentario4}</p>
                            <p style="color: black">Correo: ${ecn.parte5}</p>
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

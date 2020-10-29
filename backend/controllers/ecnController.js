import EcnModel from "../models/ecnDTO.js";

const EcnController = {
    async insert(req, res) {
        try {
            const ecn = await EcnModel.create(req.body);
            console.log(req.body);

            const mailOptions = {
                from: 'contacto@arrovacademia.es',
                to: 'contacto@arrovacademia.es',
                subject: 'Arrova Academia',
                html:   `<div style="width: 45em;">
                            <h3 style="color: black">Corrreo de contacto</h3>
                            <p style="color: black">Nombre:</p>
                            <p style="color: black;">Correo:</p>
                            <p style="color: black; margin-left: 1em">Duda:</p>
                            <p style="color: black; margin-top: 0.5em">Terminos aceptados:</p>
                        </div>`
                }
            transporter.sendMail(mailOptions);
            // TODO: CONVERTIR EL JSON QUE NOS VIENE DEL BODY A TEXTO PLANO
            // TODO: ENVIAR TEXTO PLANO A NUESTRO EMAIL DE CONTACTO -> CONTACTO@ARROVACADEMIA.ES
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

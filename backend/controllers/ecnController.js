import EcnModel from "../models/ecnDTO.js";

const EcnController = {
    async insert(req, res) {
        try {
            const ecn = await EcnModel.create(req.body);
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
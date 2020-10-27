import MatriculaModel from "../models/matriculaDTO.js";

const MatriculaController = {
    async insert(req, res) {
        try {
            const matricula = await MatriculaModel.create(req.body);
            // TODO: CONVERTIR EL JSON QUE NOS VIENE DEL BODY A TEXTO PLANO
            // TODO: ENVIAR TEXTO PLANO A NUESTRO EMAIL DE CONTACTO -> CONTACTO@ARROVACADEMIA.ES
            res.status(201).send({
                message: "LA MATRICULA SE HA INSERTADO CON ÉXITO",
                matricula,
            });
        } catch (error) {
            console.error(error);
            res.status(500).send({
                message: "LA MATRICULA NO SE HA PODIDO INSERTAR",
                error,
            });
        }
    },
};

export default MatriculaController;
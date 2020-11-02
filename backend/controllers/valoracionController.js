import ValoracionModel from "../models/valoracionDTO.js";

const ValoracionController = {
    async getAll(req, res) {
        try {
            const valoraciones = await ValoracionModel.find({ });
            res.send(valoraciones);
        } catch (err) {
            res.status(404).send({
                error: err
            });
        }
    },

    async insert(req, res) {
        try {
            const valoracion = await ValoracionModel.create(req.body);
            res.status(201).send({
                message: "LA VALORACIÓN SE HA INSERTADO CON ÉXITO",
                valoracion
            });
        } catch (error) {
            console.error(error);
            res.status(500).send({
                message: "LA VALORACIÓN NO SE HA PODIDO INSERTAR",
                error,
            });
        }
    },
};

export default ValoracionController;
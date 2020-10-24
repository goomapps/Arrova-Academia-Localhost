import ValoracionModel from "../models/valoracionDTO.js";

const ValoracionController = {
    async insert(req, res) {
        try {
            const valoracion = await ValoracionModel.create(req.body);
            res.status(201).send(valoracion);
        } catch (error) {
            console.error(error);
            res.status(500).send({
                message: ">>>CANT CREATE VALORACION",
                error,
            });
        }
    },
};

export default ValoracionController;
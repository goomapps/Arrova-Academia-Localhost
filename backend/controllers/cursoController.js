import CursoModel from "../models/cursoDTO.js";

const CursoController = {
    async insert(req, res) {
        try {
            const curso = await CursoModel.create(req.body);
            res.status(201).send(curso);
        } catch (error) {
            console.error(error);
            res.status(500).send({
                message: "NO SE HA PODIDO CREAR EL CURSO",
                error,
            });
        }
    }
};

export default CursoController;
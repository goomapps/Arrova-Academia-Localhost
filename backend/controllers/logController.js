import LogModel from "../models/logDTO.js";

const LogController = {
    async insert(req, res) {
        try {
            const log = await LogModel.create(req.body);
            res.status(201).send({
                message: "EL LOG SE HA INSERTADO CON ÉXITO",
                log
            });
        } catch (error) {
            console.error(error);
            res.status(500).send({
                message: "EL LOG NO SE HA PODIDO INSERTAR",
                error,
            });
        }
    },
};

export default LogController;
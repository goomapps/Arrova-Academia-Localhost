import LogModel from "../models/logDTO.js";

const LogController = {
    async getAll(req, res){
        try{
            const logs = await LogModel.find({ });
            res.send(logs);
        }catch(err){
            res.status(404).send({
                error: err
            });
        }
    },

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
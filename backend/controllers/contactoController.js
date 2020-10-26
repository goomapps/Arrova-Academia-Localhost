import ContactoModel from "../models/contactoDTO.js";

const ContactoController = {
    async insert(req, res) {
        try {
            const contacto = await ContactoModel.create(req.body);
            // TODO: CONVERTIR EL JSON QUE NOS VIENE DEL BODY A TEXTO PLANO
            // TODO: ENVIAR TEXTO PLANO A NUESTRO EMAIL DE CONTACTO -> CONTACTO@ARROVACADEMIA.ES
            res.status(201).send({
                message: "EL CONTACTO SE HA INSERTADO CON ÉXITO",
                contacto,
            });
        } catch (error) {
            console.error(error);
            res.status(500).send({
                message: "EL CONTACTO NO SE HA PODIDO INSERTAR",
                error,
            });
        }
    },
};

export default ContactoController;
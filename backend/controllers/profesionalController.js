import ProfesionalModel from "../models/profesionalDTO.js";
import transporter from "../config/nodemailer.js";

const ProfesionalController = {
    async insert(req, res) {
        try {
            const ecn = await ProfesionalModel.create(req.body);
            const mailOptions = {
                from: 'contacto@arrovacademia.es',
                to: 'contacto@arrovacademia.es',
                subject: 'Arrova Academia',
                html:   `<div style="width: 45em;">
                            <h3 style="color: black">Correo Profesional</h3>
                            <p style="color: black">Nombre Empresa: ${ecn.nombreEmpresa}</p>
                            <p style="color: black; margin-left: 1em">Localidad Empresa: ${ecn.localidadEmpresa}</p>
                            <p style="color: black">Direccion Empresa: ${ecn.direccionEmpresa}</p>
                            <p style="color: black; margin-left: 1em">Telefono Empresa: ${ecn.telefonoEmpresa}</p>
                            <p style="color: black">Correo Empresa: ${ecn.correoEmpresa}</p>
                            <p style="color: black; margin-left: 1em">Nombre Contacto: ${ecn.nombreContacto}</p>
                            <p style="color: black">Telefono Contacto: ${ecn.telefonoContacto}</p>
                            <p style="color: black; margin-left: 1em">Correo Contacto: ${ecn.correoContacto}</p>
                        </div>`
            }
            transporter.sendMail(mailOptions);
            res.status(201).send({
                message: "EL FORMULARIO DE PROFESIONAL SE HA INSERTADO CON ÉXITO",
                ecn,
            });
        } catch (err) {
            console.error(err);
            res.status(500).send({
                message: "EL FORMULARIO DE PROFESIONAL NO SE HA PODIDO INSERTAR",
                err,
            });
        }
    },
};

export default ProfesionalController;

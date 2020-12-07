import CursoModel from "../models/cursoDTO.js";
import transporter from "../config/nodemailer.js";

const CursoController = {
    async insert(req, res) {
        try {
            const curso = await CursoModel.create(req.body);
            
            const mailOptions = {
                from: 'contacto@arrovacademia.es',
                to: 'contacto@arrovacademia.es',
                subject: 'Arrova Academia',
                html:   `<div style="width: 45em;">
                            <h3 style="color: black">Corrreo Curso</h3>
                            <p style="color: black">Usuario: ${curso.usuario}</p>
                            <p style="color: black">Nombre: ${curso.nombre}</p>
                            <p style="color: black;">Tipo de pago: ${curso.precio}</p>
                            <p style="color: black;">Catidad pago: ${curso.catidad}</p>
                            <p style="color: black;">Direccion: ${curso.direccion}</p>
                            <p style="color: black;">Poblacion: ${curso.poblacion}</p>
                            <p style="color: black;">Provincia: ${curso.provincia}</p>
                            <p style="color: black;">Codigo postal: ${curso.codigoPostal}</p>
                            <p style="color: black;">Telefono: ${curso.telefono}</p>
                            <p style="color: black">Método de pago: ${curso.metodoPago}</p>
                            <p style="color: black">Número de cuenta: ${curso.numeroCuenta}</p>
                        </div>`
                }
            transporter.sendMail(mailOptions);

            res.status(201).send(curso);
        } catch (error) {
            console.error(error);
            res.status(500).send({
                message: "NO SE HA PODIDO CREAR EL CURSO",
                error,
            });
        }
    },

    async pago (){

    },

    async getCursosByUserId(req, res) {
        try {
            const cursos = await CursoModel.find({usuario: req.params.id});
            res.send(cursos);
        } catch (err) {
            res.status(404).send({
                error: err
            });
        }
    },
};

export default CursoController;

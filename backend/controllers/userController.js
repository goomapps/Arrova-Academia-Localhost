import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dateFormat from "dateformat";

import UserModel from "../models/userDTO.js";
import TokenModel from "../models/tokenDTO.js";
import transporter from "../config/nodemailer.js";

const UserController = {
    async getAll(req, res) {
        try {
            const usuarios = await UserModel.find({ }).populate("Curso");
            res.send(usuarios);
        } catch (err) {
            res.status(404).send({
                error: err
            });
        }
    },
    async registro(req, res) {
        try {
            const pass = req.body.contrasenya;
            req.body.contrasenya = await bcrypt.hash(req.body.contrasenya, 10);
            const date = new Date(req.body.fechaNacimiento);
            req.body.fechaNacimiento = dateFormat(date, "dd-mmmm-yyyy");
            const user = await UserModel.create(req.body);
            res.status(201).send({
                message: "USUARIO REGISTRADO CORRECTAMENTE",
                usuario: user
            });
            const mailOptions = {
                from: 'contacto@arrovacademia.es',
                to: req.body.correo,
                subject: 'Arrova Academia',
                html: ` <div style="width: 45em;">
                            <h3 style="color: black">Bienvenido a Arrova Academia</h3>
                            <p style="color: black">Gracias por unirte a nosotros. Esperamos ser de gran ayuda.</p>
                            <p style="color: black; margin-left: 1em">Tu correo es: ${req.body.correo}</p>
                            <p style="color: black; margin-left: 1em">Tu contraseña es: ${pass}</p>
                            <p style="color: black; margin-top: 0.5em">Haz click <a href="http://arrovacademia.es/#/login">aquí</a> para confirmar tu correo electrónico.</p>
                            <small style="color: black">No contestar a este correo, es meramente un correo informativo. Si quiere hacer alguna pregunta pulse <a href="http://arrovacademia.es/#/contacto">aquí.</a></small>
                        </div>`
            };
            transporter.sendMail(mailOptions);
        } catch (err) {
            res.status(500).send({
                message: "EL USUARIO NO SE HA PODIDO REGISTRAR",
                error: err
            });
        }
    },
    async login(req, res) {
        try {
            const user = await UserModel.findOne({correo: req.body.correo});
            if (!user) {
                return res.status(404).send({
                    message: "EL EMAIL NO EXISTE EN NUESTRA BASE DE DATOS",
                });
            }
            const isMatch = await bcrypt.compare(req.body.contrasenya, user.contrasenya);
            if (!isMatch) {
                return res.status(400).send({
                    message: "LAS CONTRASEÑAS NO COINCIDEN",
                });
            }
            const token = jwt.sign({_id: user._id,}, "secreto");
            // TODO: COMPROBAR SI CORREOCONFIRMADO ES FALSO, SI ES FALSO, CAMBIAR POR TRUE, SI ES TRUE NO HACER NADA
            await UserModel.findByIdAndUpdate({_id: user._id}, {
                $push: {tokens: token},
            });
            res.send({
                usuario: user,
                token: token,
            });
            // TODO: ENVIAR EMAIL CORREO CONFIRMADO
        } catch (err) {
            res.status(500).send({
                message: "EL USUARIO NO SE HA PODIDO LOGEAR",
                error: err,
            });
        }
    },
    async logout(req, res) {
        try {
            await UserModel.findByIdAndUpdate(req.user._id, {
                $pull: {tokens: req.headers.authorization,},
            });
            res.status(200).send({
                message: "EL USUARIO SE HA DESCONECTADO CORRECTAMENTE",
            });
        } catch (err) {
            res.status(500).send({
                message: "EL USUARIO NO SE HA PODIDO DESCONECTAR",
                error: err,
            });
        }
    },
    async perfil(req, res) {
        try {
            await TokenModel.findOne({
                token: req.body.token,
            }).then((token) => {
                if (token) {
                    const userConcreto = req.body;
                    UserModel.findOne({
                        username: userConcreto.nombre,
                    }).populate("Curso")
                        .then((users) => {
                            if (users) {
                                res.send(users);
                            }
                        })
                        .catch((error) => console.log(error));
                } else {
                    res.send({
                        message: "DEBES ESTAR LOGEADO",
                    });
                }
            });
        } catch (err) {
            res.status(500).send({
                message: "NO SE HA PODIDO ENCONTRAR EL PERFIL",
                error: err,
            });
        }
    },
    // TODO: CREAR METODO QUE BUSQUE TODOS LOS CURSOS DEL USUARIO
    // TODO: CREAR METODO PARA SUBIR IMAGEN DE PERFIL
    // TODO: CREAR METODO UPDATE
};

export default UserController;

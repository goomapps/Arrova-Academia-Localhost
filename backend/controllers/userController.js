import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dateFormat from "dateformat";

import UserModel from "../models/userDTO.js";
import TokenModel from "../models/tokenDTO.js";

const UserController = {
    async getAll(req, res) {
        try {
            const usuarios = await UserModel.find().populate("Curso");
            res.send({
                message: "USUARIOS: ",
                usuarios: usuarios
            });
        } catch (err) {
            res.status(404).send({
                error: err
            });
        }
    },
    // TODO: CREAR METODO QUE BUSQUE TODOS LOS CURSOS DEL USUARIO
    async registro(req, res) {
        try {
            req.body.contrasenya = await bcrypt.hash(req.body.contrasenya, 10);
            const date = new Date(req.body.fechaNacimiento);
            req.body.fechaNacimiento = dateFormat(date, "dd-mmmm-yyyy");
            const user = await UserModel.create(req.body);
            res.status(201).send({
                message: "USUARIO REGISTRADO CORRECTAMENTE",
                usuario: user
            });
        } catch (err) {
            res.status(500).send({
                message: "EL USUARIO NO SE HA PODIDO REGISTRAR",
                error: err
            });
        }
    },
    async login(req, res) {
        try {
            const user = await UserModel.findOne(req.body.correo);
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
            // TODO: BUSCAR INFORMACIÓN SOBRE EL WARNING DE METODO DEPRECADO
            await UserModel.findByIdAndUpdate(user._id, {
                $push: {tokens: token,},
            });
            res.send({
                usuario: user,
                token: token,
            });
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
    // TODO: CREAR METODO PARA SUBIR IMAGEN DE PERFIL
    // TODO: CREAR METODO UPDATE
};

export default UserController;

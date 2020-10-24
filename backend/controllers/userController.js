import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import UserModel from "../models/userDTO.js";
import TokenModel from "../models/tokenDTO.js";

const UserController = {
    async registro(req, res) {
        try {
            req.body.contrasenya = await bcrypt.hash(req.body.contrasenya, 10);
            const user = await UserModel.create(req.body);
            const message = `${user.nombre} HA SIDO REGISTRADO CORRECTAMENTE`;
            res.status(201).send({
                message: message,
                usuario: user
            });
            console.log(message);
        } catch (error) {
            const message = "EL USUARIO NO SE HA PODIDO REGISTRAR";
            res.status(500).send({
                message: message,
                error: error
            });
            console.error(error);
        }
    },
    async login(req, res) {
        try {
            const user = await UserModel.findOne({
                correo: req.body.correo
            });
            if (!user) {
                return res.status(404).send({
                    message: "USUARIO NO ENCONTRADO",
                });
            }
            const isMatch = await bcrypt.compare(req.body.contrasenya, user.contrasenya);
            if (!isMatch) {
                return res.status(400).send({
                    message: "LAS CONTRASEÑAS NO COINCIDEN",
                });
            }
            const token = jwt.sign(
                {
                    _id: user._id,
                },
                "secreto"
            );
            // TODO: buscar información deprecated metodo
            await UserModel.findByIdAndUpdate(user._id, {
                $push: {
                    tokens: token,
                },
            });
            res.send({
                usuario: user,
                token: token,
            });
        } catch (error) {
            const message = "EL USUARIO NO SE HA PODIDO LOGEAR";
            res.status(500).send({
                message: message,
                error: error,
            });
            console.error(error);
        }
    },
    async logout(req, res) {
        try {
            await UserModel.findByIdAndUpdate(req.user._id, {
                $pull: {
                    tokens: req.headers.authorization,
                },
            });
            res.status(200).send({
                message: "EL USUARIO SE HA DESLOGEADO CORRECTAMENTE",
            });
        } catch (error) {
            res.status(500).send({
                message: "EL USUARIO NO SE HA PODIDO DESLOGEAR",
                error,
            });
            console.error(error);
        }
    },
    async perfil(req, res) {
        // TODO: buscar información para enviar rol del usuario al back
        try {
            await TokenModel.findOne({
                token: req.body.token,
            }).then((token) => {
                if (token) {
                    const userConcreto = req.body;

                    //token is found and user is searched, if found, value will be returned.
                    UserModel.findOne({
                        username: userConcreto.nombre,
                    })
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
        } catch (error) {
            console.error(error);
            res.status(500).send({
                message: "NO SE HA PODIDO ENCONTRAR TU PERFIL",
                error,
            });
        }
    },
};

export default UserController;

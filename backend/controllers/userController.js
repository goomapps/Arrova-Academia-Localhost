import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import UserModel from "backend/models/userDTO.js";
import TokenModel from "backend/models/tokenDTO.js";

const UserController = {
    async register(req, res) {
        try {
            req.body.password = await bcrypt.hash(req.body.password, 10);
            const user = await UserModel.create(req.body);
            res.status(201).send(user);
        } catch (error) {
            console.error(error);
            res.status(500).send({
                message: ">>>CANT CREATE USER",
                error,
            });
        }
    },
    async login(req, res) {
        try {
            const user = await UserModel.findOne({
                email: req.body.email,
            });
            if (!user) {
                return res.status(400).send({
                    message: ">>>BAD LOGIN",
                });
            }
            const isMatch = await bcrypt.compare(req.body.password, user.password);
            if (!isMatch) {
                return res.status(400).send({
                    message: ">>>BAD LOGIN",
                });
            }
            const token = jwt.sign(
                {
                    _id: user._id,
                },
                "miSecretito"
            );
            await UserModel.findByIdAndUpdate(user._id, {
                $push: {
                    tokens: token,
                },
            });
            res.send({
                user,
                token,
            });
        } catch (error) {
            console.error(error);
            res.status(500).send({
                message: ">>>CANT LOGIN USER",
                error,
            });
        }
    },
    async logout(req, res) {
        try {
            await UserModel.findByIdAndUpdate(req.user._id, {
                $pull: {
                    tokens: req.headers.authorization,
                },
            });
            res.send({
                message: ">>>USER LOGOUT",
            });
        } catch (error) {
            console.error(error);
            res.status(500).send({
                message: ">>>CANT LOGOUT",
                error,
            });
        }
    },
    async getUser(req, res) {
        try {
            await UserModel.findOne({
                _id: req.body._id,
            })
                .then((users) => {
                    if (users) {
                        res.send(users);
                    }
                })
                .catch((error) => console.log(error));
        } catch (error) {
            console.error(error);
            res.status(500).send({
                message: ">>>CANT SHOW PROFILE",
                error,
            });
        }
    },
    async profile(req, res) {
        try {
            await TokenModel.findOne({
                _id: req.body.token,
            }).then((token) => {
                if (token) {
                    const userConcreto = req.body;

                    //token is found and user is searched, if found, value will be returned.
                    UserModel.findOne({
                        username: userConcreto.name,
                    })
                        .then((users) => {
                            if (users) {
                                res.send(users);
                            }
                        })
                        .catch((error) => console.log(error));
                } else {
                    res.send({
                        message: ">>>MUST BE LOGGED",
                    });
                }
            });
        } catch (error) {
            console.error(error);
            res.status(500).send({
                message: ">>>CANT SHOW PROFILE",
                error,
            });
        }
    },
};

export default UserController;

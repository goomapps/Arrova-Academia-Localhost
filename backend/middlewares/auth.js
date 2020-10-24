import jwt from "jsonwebtoken";
import UserModel from "../models/User.js";

export const auth = async (req, res, next) => {
    try {
        const token = req.headers.authorization;
        jwt.verify(token, "secreto");

        const user = await UserModel.findOne({
            tokens: token,
        });

        if (!user) {
            return res.status(401).send({
                message: "EL USUARIO NO TIENE PERMISOS",
            });
        }

        req.user = user;
        next();
    } catch (error) {
        console.error(error);
        return res.status(401).send({
            message: "NO TIENES PERMISOS",
            error,
        });
    }
};

import mongoose from "mongoose";
import Schema from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        nombre: {type: String},
        apellido1: {type: String},
        apellido2: {type: String},
        nombreUsuario: {type: String, unique: true,},
        correo: {type: String, unique: true,},
        contrasenya: {type: String},
        fechaNacimiento: {type: String},
        terminos: {type: Boolean},
        rol: {type: String, default: "user", enum: ["admin", "user"]},
        cursos: {type: Schema.Types.ObjectId, ref: "Curso"},
        tokens: {type: String}
    },
    {timestamps: true}
);
const UserModel = mongoose.model("Usuario", UserSchema);
export default UserModel;
import mongoose from "mongoose";
import Schema from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        nombre: {type: String, required: true},
        apellido1: {type: String, required: true},
        apellido2: {type: String, required: true},
        nombreUsuario: {type: String, required: true, unique: true},
        correo: {type: String, required: true, unique: true},
        contrasenya: {type: String, required: true},
        fechaNacimiento: {type: String, required: true},
        terminos: {type: Boolean, required: true},
        correoConfirmado: {type: Boolean, default: false},
        imagenPerfil: {type: String},
        rol: {type: String, default: "USER", enum: ["ADMIN", "USER"], uppercase: true},
        cursos: {type: [Schema.Types.ObjectId], ref: "Curso"},
        tokens: {type: [String]}
    },
    {timestamps: true}
);
const UserModel = mongoose.model("Usuarios", UserSchema);
export default UserModel;

import mongoose from "mongoose";
import Schema from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        nombre: {type: String, uppercase: true},
        apellido1: {type: String, uppercase: true},
        apellido2: {type: String, uppercase: true},
        nombreUsuario: {type: String, unique: true, uppercase: true},
        correo: {type: String, unique: true, uppercase: true},
        contrasenya: {type: String, uppercase: true},
        fechaNacimiento: {type: String, uppercase: true},
        terminos: {type: Boolean},
        imagenPerfil: {type: String},
        rol: {type: String, default: "user", enum: ["admin", "user"], uppercase: true},
        cursos: {type: [Schema.Types.ObjectId], ref: "Curso"},
        tokens: {type: [String]}
    },
    {timestamps: true}
);
const UserModel = mongoose.model("Usuario", UserSchema);
export default UserModel;
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    apellido1: {
        type: String,
        required: true,
    },
    apellido2: {
        type: String,
        required: true
    },
    nombreUsuario: {
        type: String,
        required: true,
        unique: true,
    },
    correo: {
        type: String,
        required: true,
        unique: true,
    },
    contrasenya: {
        type: String,
        required: true,
    },
    fechaNacimiento: {
        type: String,
        // TODO: buscar información format date
        required: true,
    },
    terminos: {
        type: Boolean,
        required: true
    },
    rol: {
        type: String,
        default: "user",
        enum: ["admin", "user"],
    },
    /*
    cursos: {
        // TODO: buscar información mapeo cursos por id
    },
    tokens: {
        type: [String],
        // TODO: buscar información tokens
    }
     */
}, {
    timestamps: true
});

const UserModel = mongoose.model("Usuario", UserSchema);

export default UserModel;
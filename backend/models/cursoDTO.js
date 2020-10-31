import mongoose from "mongoose";
import Schema from "mongoose";

const CursoSchema = new mongoose.Schema(
    {
        idUsuario: {type: String, required: true},
        nombre: {type: String, required: true, uppercase: true},
        precio: {type: String, enum: ["MENSUALIDAD", "TOTAL"], required: true, uppercase: true},
        cantidad: {type: Number, enum: [35, 270], required: true},
        activo: {type: Boolean, required: true,},
        direccion: {type: String, required: true, uppercase: true},
        poblacion: {type: String, required: true, uppercase: true},
        provincia: {type: String, required: true, uppercase: true},
        codigoPostal: {type: Number, required: true},
        telefono: {type: Number, required: true},
        proteccionDatos: {type: Boolean, required: true}
    },
    {timestamps: true}
);
const CursoModel = mongoose.model("Curso", CursoSchema);
export default CursoModel;

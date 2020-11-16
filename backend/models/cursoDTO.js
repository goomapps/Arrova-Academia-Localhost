import mongoose from "mongoose";
import Schema from "mongoose";

const CursoSchema = new mongoose.Schema(
    {
        usuario: { type: Schema.Types.ObjectId, ref: "Usuario"},
        nombre: {type: String, required: true},
        precio: {type: String, enum: ["MENSUAL", "TOTAL"], required: true, uppercase: true},
        cantidad: {type: Number, enum: [35, 270], required: true},
        activo: {type: Boolean, required: true,},
        direccion: {type: String, required: true},
        poblacion: {type: String, required: true},
        provincia: {type: String, required: true},
        codigoPostal: {type: Number, required: true},
        telefono: {type: Number, required: true},
        metodoPago: {type: String, enum: ['DOMICILIACIÓN', 'TRANSFERENCIA', 'ENTERO', 'PLAZOS'], required: true, uppercase: true},
        proteccionDatos: {type: Boolean, required: true}
    },
    {timestamps: true}
);
const CursoModel = mongoose.model("Cursos", CursoSchema);
export default CursoModel;

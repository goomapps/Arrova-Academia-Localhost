import mongoose from "mongoose";
import Schema from "mongoose";

const CursoSchema = new mongoose.Schema(
    {
        nombre: {type: String, required: true, uppercase: true},
        precio: {type: String, enum: ["mensualidad", "total"], required: true, uppercase: true},
        cantidad: {type: Number, enum: [35, 270], required: true},
        activo: {type: Boolean, required: true,},
        matricula: {type: [Schema.Types.ObjectId], ref: "Matricula"}
    },
    {timestamps: true}
);

const CursoModel = mongoose.model("Curso", CursoSchema);

export default CursoModel;

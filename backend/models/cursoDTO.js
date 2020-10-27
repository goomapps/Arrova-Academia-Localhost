import mongoose from "mongoose";

const CursoSchema = new mongoose.Schema(
    {
        nombre: {type: String, required: true, uppercase: true},
        precio: {type: String, enum: ["mensualidad", "total"], required: true, uppercase: true},
        cantidad: {type: Number, enum: [35, 270], required: true},
        adquirido: {type: Boolean, required: true,},
    },
    {timestamps: true}
);

const CursoModel = mongoose.model("Curso", CursoSchema);

export default CursoModel;

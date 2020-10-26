import mongoose from "mongoose";

const CursoSchema = new mongoose.Schema(
    {
        nombre: {
            type: String,
            required: true,
        },
        precio: {
            type: String,
            enum: ["mensualidad", "total"],
            required: true,
        },
        cantidad: {
            type: Number,
            required: true
        },
        adquirido: {
            type: Boolean,
            required: true,
        },
    },
    {timestamps: true}
);

const CursoModel = mongoose.model("Curso", CursoSchema);

export default CursoModel;

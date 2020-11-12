import mongoose from 'mongoose';

const ValoracionSchema = new mongoose.Schema(
    {
        tipo: {type: String, enum: ["CURSO", "PROFESOR", "APP", "GENERAL"], required: true, uppercase: true},
        texto: {type: String, required: true},
        rate: {type: Number, enum: [1, 2, 3, 4, 5], required: true}
    },
    {timestamps: true}
);
const ValoracionModel = mongoose.model("Valoracion", ValoracionSchema);
export default ValoracionModel;

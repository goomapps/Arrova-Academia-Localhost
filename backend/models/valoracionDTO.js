import mongoose from 'mongoose';

const ValoracionSchema = new mongoose.Schema(
    {
        tipo: {
            type: String,
            required: true
        },
        comentario: {
            type: String,
            required: true
        },
        puntuacion: {
            type: Number,
            required: true
        },
        terminos: {
            type: Boolean,
            required: true
        }
    },
    {timestamps: true}
);

const ValoracionModel = mongoose.model("Valoracion", ValoracionSchema);

export default ValoracionModel;
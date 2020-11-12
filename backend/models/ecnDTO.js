import mongoose from "mongoose";

const EcnSchema = new mongoose.Schema(
    {
        parte1: {type: [String], required: true},
        comentario1: {type: String},
        parte2: {type: [String]},
        comentario2: {type: String},
        parte3: {type: [String]},
        comentario3: {type: String},
        parte4: {type: [String]},
        comentario4: {type: String},
        correo: {type: String, required: true},
        terminos: {type: Boolean, required: true},
    },
    {timestamps: true}
);
const EcnModel = mongoose.model("ECN", EcnSchema);
export default EcnModel;

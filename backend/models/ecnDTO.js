import mongoose from "mongoose";

const EcnSchema = new mongoose.Schema(
    {
        parte1: {type: [Boolean]},
        comentario1: {type: String},
        parte2: {type: [Boolean]},
        comentario2: {type: String},
        parte3: {type: [Boolean]},
        comentario3: {type: String},
        parte4: {type: [Boolean]},
        comentario4: {type: String},
        parte5: {type: [Boolean]},
        comentario5: {type: String},
    },
    {timestamps: true}
);

const EcnModel = mongoose.model("ECN", EcnSchema);

export default EcnModel;

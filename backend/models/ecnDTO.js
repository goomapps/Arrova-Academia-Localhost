import mongoose from "mongoose";

const EcnSchema = new mongoose.Schema(
    {
        parte1: {type: [String]},
        comentario1: {type: String, uppercase: true},
        parte2: {type: [String]},
        comentario2: {type: String, uppercase: true},
        parte3: {type: [String]},
        comentario3: {type: String, uppercase: true},
        parte4: {type: [String]},
        comentario4: {type: String, uppercase: true},
        email: {type: String},
        terminos: {type: Boolean},
    },
    {timestamps: true}
);
const EcnModel = mongoose.model("ECN", EcnSchema);
export default EcnModel;

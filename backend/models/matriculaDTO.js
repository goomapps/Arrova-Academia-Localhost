import mongoose from "mongoose";

const MatriculaSchema = new mongoose.Schema(
    {
        direccion: {type: String, required: true, uppercase: true},
        poblacion: {type: String, required: true, uppercase: true},
        provincia: {type: String, required: true, uppercase: true},
        codigoPostal: {type: Number, required: true},
        telefono: {type: Number, required: true},
        proteccionDatos: {type: Boolean, required: true}
    },
    {timestamps: true}
);
const MatriculaModel = mongoose.model("Matricula", MatriculaSchema);
export default MatriculaModel;
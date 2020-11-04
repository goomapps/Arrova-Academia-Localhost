import mongoose from "mongoose";

const ProfesionalSchema = new mongoose.Schema(
    {
        nombreEmpresa: {type: String, required: true},
        localidadEmpresa: {type: String, required: true},
        direccionEmpresa: {type: String, required: true},
        telefonoEmpresa: {type: Number, required: true},
        correoEmpresa: {type: String, required: true},
        nombreContacto: {type: String, required: true},
        telefonoContacto: {type: Number, required: true},
        correoContacto: {type: String, required: true}
    },
    {timestamps: true}
);
const ProfesionalModel = mongoose.model("Profesional", ProfesionalSchema);
export default ProfesionalModel;

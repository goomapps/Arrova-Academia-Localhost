import mongoose from "mongoose";

const ProfesionalSchema = new mongoose.Schema(
    {
        nombreEmpresa: {type: String},
        localidadEmpresa: {type: String},
        direccionEmpresa: {type: String},
        telefonoEmpresa: {type: Number},
        correoEmpresa: {type: String},
        nombreContacto: {type: String},
        telefonoContacto: {type: Number},
        correoContacto: {type: String}
    },
    {timestamps: true}
);
const ProfesionalModel = mongoose.model("Profesional", ProfesionalSchema);
export default ProfesionalModel;

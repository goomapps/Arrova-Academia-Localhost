import mongoose from 'mongoose';

const ContactoSchema = new mongoose.Schema(
    {
        nombre: {type: String, required: true, uppercase: true},
        correo: {type: String, required: true, uppercase: true},
        texto: {type: String, required: true, uppercase: true},
        terminos: {type: Boolean, required: true}
    },
    {timestamps: true}
);

const ContactoModel = mongoose.model("Contacto", ContactoSchema);

export default ContactoModel;
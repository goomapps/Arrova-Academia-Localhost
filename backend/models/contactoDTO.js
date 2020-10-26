import mongoose from 'mongoose';

const ContactoSchema = new mongoose.Schema(
    {
        nombre: {
            type: String,
            required: true
        },
        correo: {
            type: String,
            required: true
        },
        texto: {
            type: String,
            required: true
        },
        terminos: {
            type: Boolean,
            required: true
        }
    },
    {timestamps: true}
);

const ContactoModel = mongoose.model("Contacto", ContactoSchema);

export default ContactoModel;
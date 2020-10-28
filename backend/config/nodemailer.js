import nodemailer from "nodemailer";
import keys from "./keys.js";

const transporter = nodemailer.createTransport({
    pool: true,
    host: "smtp.arrovacademia.es",
    port: 25,
    auth: {
        user: keys.GMAIL.email,
        pass: keys.GMAIL.password
    },
    tls: {
        rejectUnauthorized: false
    }
});

export default transporter;

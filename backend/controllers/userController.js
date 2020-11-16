import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import UserModel from "../models/userDTO.js";
import TokenModel from "../models/tokenDTO.js";
import transporter from "../config/nodemailer.js";

const UserController = {
    async getAll(req, res) {
        try {
            const usuarios = await UserModel.find({ }).populate("curso");
            res.send(usuarios);
        } catch (err) {
            res.status(404).send({
                error: err
            });
        }
    },
    async registro(req, res) {
        try {
            const pass = req.body.contrasenya;
            req.body.contrasenya = await bcrypt.hash(req.body.contrasenya, 10);
            const user = await UserModel.create(req.body);
            res.status(201).send({
                message: "USUARIO REGISTRADO CORRECTAMENTE",
                usuario: user
            });
            const mailOptions = {
                from: 'contacto@arrovacademia.es',
                to: req.body.correo,
                subject: 'Arrova Academia',
                html: ` <div style="width: 45em;">
                            <h3 style="color: black">Bienvenido a Arrova Academia</h3>
                            <p style="color: black">Gracias por unirte a nosotros. Esperamos ser de gran ayuda.</p>
                            <p style="color: black; margin-left: 1em">Tu correo es: ${req.body.correo}</p>
                            <p style="color: black; margin-left: 1em">Tu contraseña es: ${pass}</p>
                            <p style="color: black; margin-top: 0.5em">Haz click <a href="http://arrovacademia.es/#/login">aquí</a> para confirmar tu correo electrónico.</p>
                            <small style="color: black">No contestar a este correo, es meramente un correo informativo. Si quiere hacer alguna pregunta pulse <a href="http://arrovacademia.es/#/contacto">aquí.</a></small>
                            <p style="color: black">AVISO LEGAL: Este mensaje y sus archivos adjuntos van dirigidos exclusivamente a su destinatario, pudiendo contener información confidencial sometida a secreto profesional. No está permitida su comunicación, reproducción o distribución sin la autorización expresa ADRIAN GONZALEZ ROMERO. Si Vd. ha recibido este correo y no es el destinatario final, le rogamos nos informe inmediatamente al a la dirección de correo electrónico contacto@arrovacademia.es, tenga la amabilidad de eliminarlo de su sistema y no copiar el mensaje ni divulgar su contenido a ninguna persona pues conforme al Código Penal vigente será castigado el que, para descubrir los secretos y/o vulnerar la intimidad de otro, sin su consentimiento, se apodere de mensajes de correo electrónico. También incurre en delito aquel que descubriere, revelare ó cediere datos reservados de personas jurídicas, sin el consentimiento de sus representantes.</p>
                            <p style="color: black">Le informamos, como destinatario de este mensaje, que el correo electrónico y las comunicaciones por medio de Internet no permiten asegurar ni garantizar la confidencialidad de los mensajes transmitidos, así como tampoco su integridad o su correcta recepción, por lo que el emisor no asume responsabilidad alguna por tales circunstancias. Si no consintiese en la utilización del correo electrónico o de las comunicaciones vía Internet le rogamos nos lo comunique y ponga en nuestro conocimiento de manera inmediata. </p>
                            <p style="color: black">PROTECCIÓN DE DATOS: De conformidad con lo dispuesto en las normativas vigentes en protección de datos personales, el Reglamento (UE) 2016/679 de 27 de abril de 2016 (GDPR)  y la Ley Orgánica (ES) 3/2018 de 5 de diciembre (LOPDGDD), le informamos que los datos personales y dirección de correo electrónico, recabados del propio interesado y en virtud de la relación contractual que nos une, serán tratados bajo la responsabilidad de ADRIAN GONZALEZ ROMERO para el envío de comunicaciones con los fines de poder prestar nuestros servicios, gestionar la relación e informarles sobre los mismos. Los datos se conservarán mientras se mantenga la relación comercial, durante el tiempo necesario para cumplir con las obligaciones legales o mientras no retire su consentimiento. Le informamos que puede ejercer los derechos de acceso, rectificación, portabilidad y supresión de sus datos y los de limitación y oposición a su tratamiento dirigiéndose por escrito con copia de su D.N.I. o documento equivalente que lo identifique a C/ CARMEN DONDERIS, nº 1-38 - MELIANA - 46.133 - VALENCIA; también puede enviar un mensaje al mail contacto@arrovacademia.es. Si considera que el tratamiento no se ajusta a la normativa vigente, podrá presentar una reclamación ante la autoridad de control en www.aepd.es.  </p>
                            <p style="color: green">Antes de imprimir este mensaje, por favor compruebe que es verdaderamente necesario. El Medio Ambiente es cosa de todos.<p>
                        </div>`
            };
            transporter.sendMail(mailOptions);
        } catch (err) {
            res.status(500).send({
                message: "EL USUARIO NO SE HA PODIDO REGISTRAR",
                error: err
            });
        }
    },
    async login(req, res) {
        try {
            const user = await UserModel.findOne({correo: req.body.correo});
            if (!user) {
                return res.status(404).send({
                    message: "EL EMAIL NO EXISTE EN NUESTRA BASE DE DATOS",
                });
            }
            const isMatch = await bcrypt.compare(req.body.contrasenya, user.contrasenya);
            if (!isMatch) {
                return res.status(400).send({
                    message: "LAS CONTRASEÑAS NO COINCIDEN",
                });
            }
            const token = jwt.sign({_id: user._id,}, "secreto");
            console.log(user.correoConfirmado);
            // TODO: COMPROBAR SI CORREOCONFIRMADO ES FALSO, SI ES FALSO, CAMBIAR POR TRUE, SI ES TRUE NO HACER NADA
            if(user.correoConfirmado != true){
                const isConfirmado = true;
                 UserModel.findByIdAndUpdate({_id: user._id}, {
                    $push: {correoConfirmado: isConfirmado},
                });
            };
            await UserModel.findByIdAndUpdate({_id: user._id}, {
                $push: {tokens: token},
            });
            res.send({
                usuario: user,
                token: token,
            });
            /*const mailOptions = {
                from: 'contacto@arrovacademia.es',
                to: user.correo,
                subject: 'Arrova Academia',
                html: ` <div style="width: 45em;">
                            <h3 style="color: black">Bienvenido a Arrova Academia</h3>
                            <p style="color: black">Gracias por unirte a nosotros.</p>
                            <p style="color: black">Su cuenta ha sido confirmada con exito.</p>
                            <small style="color: black">No contestar a este correo, es meramente un correo informativo. Si quiere hacer alguna pregunta pulse <a href="http://arrovacademia.es/#/contacto">aquí.</a></small>
                            <p style="color: black">AVISO LEGAL: Este mensaje y sus archivos adjuntos van dirigidos exclusivamente a su destinatario, pudiendo contener información confidencial sometida a secreto profesional. No está permitida su comunicación, reproducción o distribución sin la autorización expresa ADRIAN GONZALEZ ROMERO. Si Vd. ha recibido este correo y no es el destinatario final, le rogamos nos informe inmediatamente al a la dirección de correo electrónico contacto@arrovacademia.es, tenga la amabilidad de eliminarlo de su sistema y no copiar el mensaje ni divulgar su contenido a ninguna persona pues conforme al Código Penal vigente será castigado el que, para descubrir los secretos y/o vulnerar la intimidad de otro, sin su consentimiento, se apodere de mensajes de correo electrónico. También incurre en delito aquel que descubriere, revelare ó cediere datos reservados de personas jurídicas, sin el consentimiento de sus representantes.</p>
                            <p style="color: black">Le informamos, como destinatario de este mensaje, que el correo electrónico y las comunicaciones por medio de Internet no permiten asegurar ni garantizar la confidencialidad de los mensajes transmitidos, así como tampoco su integridad o su correcta recepción, por lo que el emisor no asume responsabilidad alguna por tales circunstancias. Si no consintiese en la utilización del correo electrónico o de las comunicaciones vía Internet le rogamos nos lo comunique y ponga en nuestro conocimiento de manera inmediata. </p>
                            <p style="color: black">PROTECCIÓN DE DATOS: De conformidad con lo dispuesto en las normativas vigentes en protección de datos personales, el Reglamento (UE) 2016/679 de 27 de abril de 2016 (GDPR)  y la Ley Orgánica (ES) 3/2018 de 5 de diciembre (LOPDGDD), le informamos que los datos personales y dirección de correo electrónico, recabados del propio interesado y en virtud de la relación contractual que nos une, serán tratados bajo la responsabilidad de ADRIAN GONZALEZ ROMERO para el envío de comunicaciones con los fines de poder prestar nuestros servicios, gestionar la relación e informarles sobre los mismos. Los datos se conservarán mientras se mantenga la relación comercial, durante el tiempo necesario para cumplir con las obligaciones legales o mientras no retire su consentimiento. Le informamos que puede ejercer los derechos de acceso, rectificación, portabilidad y supresión de sus datos y los de limitación y oposición a su tratamiento dirigiéndose por escrito con copia de su D.N.I. o documento equivalente que lo identifique a C/ CARMEN DONDERIS, nº 1-38 - MELIANA - 46.133 - VALENCIA; también puede enviar un mensaje al mail contacto@arrovacademia.es. Si considera que el tratamiento no se ajusta a la normativa vigente, podrá presentar una reclamación ante la autoridad de control en www.aepd.es.  </p>
                            <p style="color: green">Antes de imprimir este mensaje, por favor compruebe que es verdaderamente necesario. El Medio Ambiente es cosa de todos.<p>
                        </div>`
            };
            transporter.sendMail(mailOptions);*/
        } catch (err) {
            res.status(500).send({
                message: "EL USUARIO NO SE HA PODIDO LOGEAR",
                error: err,
            });
        }
    },
    async logout(req, res) {
        try {
            await UserModel.findByIdAndUpdate(req.user._id, {
                $pull: {tokens: req.headers.authorization,},
            });
            res.status(200).send({
                message: "EL USUARIO SE HA DESCONECTADO CORRECTAMENTE",
            });
        } catch (err) {
            res.status(500).send({
                message: "EL USUARIO NO SE HA PODIDO DESCONECTAR",
                error: err,
            });
        }
    },
    async perfil(req, res) {
        
        try {
            await TokenModel.findOne({
                token: req.body.token,
            }).then((token) => {
                if (token) {
                    const userConcreto = req.body;
                    console.log(userConcreto);
                    UserModel.findOne({
                        user: userConcreto.nombre,
                    }).populate("cursos")
                        .then((users) => {
                            if (users) {
                                res.send(users);
                            }
                        })
                        .catch((error) => console.log(error));
                } else {
                    res.send({
                        message: "DEBES ESTAR LOGEADO",
                    });
                }
            });
        } catch (err) {
            res.status(500).send({
                message: "NO SE HA PODIDO ENCONTRAR EL PERFIL",
                error: err,
            });
        }
    },
    // TODO: CREAR METODO QUE BUSQUE TODOS LOS CURSOS DEL USUARIO
    // TODO: CREAR METODO PARA SUBIR IMAGEN DE PERFIL
    // TODO: CREAR METODO UPDATE
    async update(req, res){
        try{
            const userId = req.body._id;
            const dataUpdate = req.body;
            const usuario = await UserModel.findByIdAndUpdate(userId, dataUpdate);
            res.send({usuario});
        }catch(err){
            res.status(500).send({
                message: "NO SE HA PODIDO ACTUALIZAR EL USUARIO",
                error: err,
            });
        }
    }
    
};

export default UserController;

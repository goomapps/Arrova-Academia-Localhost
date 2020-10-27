import express from "express";
import morgan from "morgan";

import "./config/conexionbd.js";
import cors from "./middlewares/cors.js";

const app = express();
const PORT = process.env.PORT || 3001;

// ROUTERS
import userRouter from "./routes/userRoute.js";
import contactoRouter from "./routes/contactoRoute.js";
import valoracionRouter from "./routes/valoracionRoute.js";
import cursoRouter from "./routes/cursoRoute.js";
import ecnRouter from "./routes/ecnRoute.js";
// import cartRouter from "./routes/cart.js";
// import ticketRouter from "./routes/ticket.js";
// import cursoValencianoRouter from "./routes/curso_valenciano.js";

// MIDDLEWARES
app.use(morgan("dev"));
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(express.json());
app.use(cors);

// ENDPOINTS
app.use(express.static("client/frontend"));
app.use("/usuarios", userRouter);
app.use("/contactos", contactoRouter);
app.use("/valoraciones", valoracionRouter);
app.use("/cursos", cursoRouter);
app.use("/estudia-con-nosotros", ecnRouter);
/*
app.use("/cart", cartRouter);
app.use("/ticket", ticketRouter);
app.use("/cvalenciano", cursoValencianoRouter);
 */

// LEVANTAMOS SERVIDOR
app.listen(PORT, () => console.log("SERVIDOR CORRIENDO EN EL PUERTO " + PORT));
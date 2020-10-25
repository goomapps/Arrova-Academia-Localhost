import express from "express";
import morgan from "morgan";

const app = express();

const PORT = process.env.PORT || 3001;

// CONEXION A LA BD
import "./config/conexionbd.js";

// IMPORTACIONES
// MIDDLEWARES
import cors from "./middlewares/cors.js";
// ROUTERS
import userRouter from "./routes/userRoute.js";
import contactoRouter from "./routes/contactoRoute.js";
import valoracionRouter from "./routes/valoracionRoute.js";
import cursoRouter from "./routes/cursoRoute.js";
// import cartRouter from "./routes/cart.js";
// import ticketRouter from "./routes/ticket.js";
// import cursoValencianoRouter from "./routes/curso_valenciano.js";
// import ean_aRouter from "./routes/ean_a.js";
// import ean_cRouter from "./routes/ean_c.js";
// import ean_rRouter from "./routes/ean_r.js";
// import ean_tRouter from "./routes/ean_t.js";
// import ean_vRouter from "./routes/ean_v.js";

// MORGAN
app.use(morgan("dev"));

// MIDDLEWARES
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(express.json());

// CORS Y HEADERS
app.use(cors);

// ENDPOINTS
app.use(express.static("client/frontend"));
app.use("/usuarios", userRouter);
app.use("/contactos", contactoRouter);
app.use("/valoraciones", valoracionRouter);
app.use("/cursos", cursoRouter);
/*
app.use("/cart", cartRouter);
app.use("/ticket", ticketRouter);
app.use("/cvalenciano", cursoValencianoRouter);
app.use("/ean_a", ean_aRouter);
app.use("/ean_c", ean_cRouter);
app.use("/ean_r", ean_rRouter);
app.use("/ean_t", ean_tRouter);
app.use("/ean_v", ean_vRouter);
 */

// LEVANTAMOS SERVIDOR
app.listen(PORT, () => console.log("SERVIDOR CORRIENDO EN EL PUERTO " + PORT));
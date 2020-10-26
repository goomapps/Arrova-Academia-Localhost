import mongoose from "mongoose";

const db = mongoose
    .connect(
        "mongodb+srv://algoroloro:Jofx2co8a@academia.1iokr.mongodb.net/arrobacademia?retryWrites=true&w=majority",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
        }
    )
    .then(() => console.log("CONEXIÓN A LA BD REALIZADA CON ÉXITO"))
    .catch(console.error);

export default db;

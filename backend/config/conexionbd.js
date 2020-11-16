import mongoose from "mongoose";

mongoose.connect(
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
mongoose.set("debug", (collectionName, method, query, doc) => {
    console.log(`${collectionName}.${method}`, JSON.stringify(query), doc);
});

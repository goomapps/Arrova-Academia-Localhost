import mongoose from "mongoose";
import Schema from "mongoose";

const TokenSchema = new mongoose.Schema(
    {
        token: {type: String, required: true},
        usuario: {type: Schema.Types.ObjectId, ref: "User", required: true},
        usado: {type: Boolean, required: true},
    },
    {timestamps: true}
);

const TokenModel = mongoose.model("Token", TokenSchema);

export default TokenModel;

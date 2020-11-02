import mongoose from 'mongoose';

const LogsSchema = new mongoose.Schema(
    {
        message: {type: String, require:true, uppercase:true},
        additional:{type: [String]},
        level: {type: Number, require:true},
        fileName: {type: String, require:true},
        lineNumbre: {type:String, require:true}

        
    },
    {timestamps: true}
);
const LogModel = mongoose.model("Logs", LogsSchema);
export default LogModel;
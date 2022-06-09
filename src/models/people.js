const { Int32 } = require("mongodb");
const mongoose = require("mongoose");
const { Schema } = mongoose;

const peopleSchema = new Schema(
    {
        firstName: String,
        lastName: String,
        birthDat: Date,
        birthFrom:String,
        DPI: String,
        genre: String,
        father : String,
        mother : String,
        token : [{
            tok: String,
            datet : Date
        }], 
    },
    {
        versionKey: false,
        timestamps: true
    }
);

module.exports = mongoose.model("People", peopleSchema);
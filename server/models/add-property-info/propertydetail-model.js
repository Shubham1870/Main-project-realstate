const mongoose = require("mongoose");

const propertyDeatilScehma = new mongoose.Schema({
    length: {
        type: Number
    },
    breadth: {
        type: Number
    },
    totalArea: {
        type: Number,
        required: true
    },
    areaUnit: {
        type: String,
        enum: ["sqm", "acres", "hectares"],
        default: "sqm",
    },
    bhk: {
        type: Number,
    },
    floor: {
        type: Number
    },
    attached: {
        type: String,
    },
    westernToilet: {
        type: String,
        enum: ["yes", "no"],
        default: "yes"
    },
    furnished: {
        type: String,
        enum: ["yes", "no"],
        default: "no"
    },
    parking: {
        type: String,
        enum: ["yes", "no"],
    },
    lift: {
        type: String,
        enum: ["yes", "no"],
        default: "no"
    },
    electricity: {
        type: Number,
    },
    facing: {
        type: String,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    basicInfo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Basicinfo",
    }
})

module.exports = mongoose.model("Property", propertyDeatilScehma)
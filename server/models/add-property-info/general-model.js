const mongoose = require("mongoose");

const generalInfoScehma = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    mobile: {
        type: Number,
        required: true,
    },
    postedby: {
        type: String,
        enum: ["dealer", "self"],
        default: "self"
    },
    saletype: {
        enum: ["Transactional", "Solution", "Consultative", "Provocative"],
        default: "Transactional"
    },
    feature: {
        type: String,
    },
    PPDpackage: {
        type: String,
    },
    image: {
        type: String,
        required: true
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
module.exports = mongoose.model("General", generalInfoScehma)
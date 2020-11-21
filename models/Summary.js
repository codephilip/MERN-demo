import mongoose from "mongoose";

const { ObjectId, Number } = mongoose.Schema.Types;

const SummarySchema = new mongoose.Schema({

    user: {
        type: ObjectId,
        ref: "User"
    },
    summarys:[
        {
            type: {
                type: String,
                required: true,
                default: 'some'
            },
            name: {
                type: String,
                required: true,
                ref: "Name"
            },
            ammount:{
                type: Number,
                required: true
            }
        }
    ]


});

export default mongoose.models.Summary || mongoose.model("Summary", SummarySchema);
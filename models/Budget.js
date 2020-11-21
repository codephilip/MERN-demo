import mongoose from "mongoose";

const { ObjectId, Number } = mongoose.Schema.Types;

const BudgetSchema = new mongoose.Schema({

    user: {
        type: ObjectId,
        ref: "User"
    },
    budgets:[
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

export default mongoose.models.Budget || mongoose.model("Budget", BudgetSchema);
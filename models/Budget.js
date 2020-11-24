import mongoose from "mongoose";
const {String } = mongoose.Schema.Types;

const BudgetSchema = new mongoose.Schema({

    user: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true
    },
    ammount:{
        type: String,
        required: true
    }




});

export default mongoose.models.Budget || mongoose.model("Budget", BudgetSchema);
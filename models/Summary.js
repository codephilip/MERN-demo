import mongoose from "mongoose";
import shortid from "shortid";
const { ObjectId, Number, String } = mongoose.Schema.Types;

const SummarySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
      },
      price: {
        type: Number,
        required: true
      },
      sku: {
        type: String,
        unique: true,
        default: shortid.generate()
      },
      description: {
        type: String,
        required: true
      },
      mediaUrl: {
        type: String,
        required: true
      }
    });
    


export default mongoose.models.Summary || mongoose.model("Summary", SummarySchema);
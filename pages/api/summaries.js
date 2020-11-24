

// import products from "../../static/products.json";
import Summary from "../../models/Summary";
import connectDb from "../../utils/connectDb";

connectDb();

export default async (req, res) => {
  const summaries = await Summary.find();
  res.status(200).json(summaries);
};

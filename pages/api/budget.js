import Budget from "../../models/Budget";
import connectDb from "../../utils/connectDb";

connectDb();

export default async (req, res) => {
  switch (req.method) {
    case "GET":
      await handleGetRequest(req, res);
      break;
    case "POST":
      await handlePostRequest(req, res);
      break;
    case "DELETE":
      await handleDeleteRequest(req, res);
      break;
    default:
      res.status(405).send(`Method ${req.method} not allowed`);
      break;
  }
};

async function handleGetRequest(req, res) {
  const { user } = req.query;
  const budget = await Budget.findOne({ user });
  res.status(200).json(budget);
}

async function handlePostRequest(req, res) {
  const { type, name, ammount } = req.body;
  try {
    if (!type || !name || !ammount) {
      return res.status(422).send("Product missing one or more fields");
    }
    const budget = await new Budget({
        type,
        name,
        ammount,
    }).save();
    res.status(201).json(budget);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error in creating product");
  }
}

async function handleDeleteRequest(req, res) {
  const { user } = req.query;
  await Budget.findOneAndDelete({ user });
  res.status(204).json({});
}

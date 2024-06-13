import contactDetails from "../models/contactDetails.js";

export const createContact = async (req, res) => {
  try {
    const data = req.body;

    const newData = new contactDetails(data);
    await newData.save();
    return res.status(200).json({ message: "response recorded successfully" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: error.message });
  }
};

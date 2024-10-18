const Response = require("../model/Response");

const handleResponseSave = async (req, res) => {
  try {
    const {
      query,
      summary,
      result_text,
      result_visualization_path,
      result_table_path,
    } = req.body;

    const userId = req.user._doc._id;

    const isPrevRes = await Response.find({
      summary: summary,
      result_text: result_text,
      result_visualization_path: result_visualization_path,
      result_table_path: result_table_path,
    });

    if (isPrevRes.length > 0)
      return res.status(500).json({ message: "Response is already saved" });

    const response = await new Response({
      userId: userId,
      summary: summary,
      query: query,
      result_text: result_text,
      result_visualization_path: result_visualization_path,
      result_table_path: result_table_path,
    });

    await response.save();

    return res.status(200).json({ message: "Response Successfully Saved" });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "Failed to save response, Try Again!", error: error });
  }
};

const handleUserResponses = async (req, res) => {
  try {
    const userId = req.query.userId || req.user._doc._id;

    const responses = await Response.find({ userId: userId });

    return res.status(200).json(responses);
  } catch (error) {
    console.log(error);
    return res
      .send(500)
      .json({ message: "Failed to get response, Try Again!", error: error });
  }
};

const handleUserResponsesCount = async (req, res) => {
  try {
    const { userId } = req.query;

    const responsesCount = await Response.countDocuments({ userId: userId });

    return res.status(200).json({ count: responsesCount });
  } catch (error) {
    console.log(error);
    return res
      .send(500)
      .json({ message: "Failed to get response, Try Again!", error: error });
  }
};

module.exports = {
  handleResponseSave,
  handleUserResponses,
  handleUserResponsesCount,
};

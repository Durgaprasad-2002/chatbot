const { Router } = require("express");
const genai = require("../configs/genAi");

const router = Router();

router.post("/chat", async (req, res) => {
  const { query } = req.body;

  const model = genai.getGenerativeModel({ model: "gemini-pro" });

  const prompt = `This is the prompt: ${query}. Provide the following :
Summary  (formatted in HTML with inline tags)
Result_text (formatted in HTML with inline tags), separated by these two by  '$%#' . and not that do not mention Summary or Result_text in response, seperate them only by '$%#'  and provide only content of inner body  and apply Inline Css only `;

  try {
    const result = await model.generateContent(prompt);

    const response = result.response;
    const mainJson = response.candidates[0].content.parts[0].text;

    const [summary, resultText] = mainJson.split("$%#");

    const formattedResponse = {
      summary: summary,
      result_text: resultText,
      query: query,
      result_table_path: "",
      result_visualization_path: "",
    };

    res.status(200).json(formattedResponse);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      summary: "",
      result_text: "",
      error: "Failed to generate a response",
    });
  }
});

module.exports = router;

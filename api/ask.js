const axios = require("axios");

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Metode tidak diizinkan" });
  }

  const prompt = req.body.prompt;

  try {
    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "openai/gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "HTTP-Referer": "https://ai-app-black-iota.vercel.app/", // sesuaikan dengan domainmu
          "X-Title": "Depseek AI App",
        },
      }
    );

    const aiResponse = response.data.choices[0].message.content;
    res.status(200).json({ response: aiResponse });
  } catch (error) {
    console.error("OpenRouter API error:", error.response?.data || error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

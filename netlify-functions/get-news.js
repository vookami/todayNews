const axios = require("axios");

exports.handler = async (event) => {
  try {
    const params = {
      country: event.queryStringParameters.country || "us",
      category: "general",
      apiKey: process.env.NEWS_API_KEY,
    };

    const response = await axios.get("https://newsapi.org/v2/top-headlines", {
      params,
    });

    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    console.error("Error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal Server Error" }),
    };
  }
};

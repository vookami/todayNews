const axios = require("axios");

exports.handler = async function (event, context) {
  try {
    const response = await axios.get("https://newsapi.org/v2/top-headlines", {
      params: {
        apiKey: "ee2484759c794447a095b1f5a90a5340",
        category: "business",
        country: "jp",
        pageSize: 20,
      },
    });
    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    console.error("Error fetching news:", error.message);
    return {
      statusCode: 500,
      body: "Server Error",
    };
  }
};

// Import required modules
const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");

// Initialize the app and port
const app = express();
const port = 3000;

// Middleware for parsing JSON requests
app.use(bodyParser.json());

// In-memory storage for articles
let articles = [];

// Optional: Load articles from `articles.json` if the file exists
if (fs.existsSync("./articles.json")) {
  articles = JSON.parse(fs.readFileSync("./articles.json", "utf-8"));
}

// Utility function to save articles persistently
const saveArticles = () => {
  fs.writeFileSync("./articles.json", JSON.stringify(articles, null, 2));
};

// Add Article (POST /articles)
app.post("/articles", (req, res) => {
  const { title, content, tags } = req.body;

  if (!title || !content) {
    return res.status(400).json({ error: "Title and content are required." });
  }

  const article = {
    id: articles.length + 1,
    title,
    content,
    tags: tags || [],
    date: new Date(),
  };

  articles.push(article);
  saveArticles(); // Save to file if persistence is enabled

  res.status(201).json({ message: "Article added successfully.", article });
});

// Search Articles (GET /articles/search)
app.get("/articles/search", (req, res) => {
  const { keyword, sortBy = "relevance" } = req.query;

  if (!keyword) {
    return res.status(400).json({ error: "Keyword is required for search." });
  }

  const results = articles
    .filter(
      (article) =>
        article.title.includes(keyword) || article.content.includes(keyword)
    )
    .map((article) => ({
      ...article,
      relevance:
        article.title.split(keyword).length -
        1 +
        (article.content.split(keyword).length - 1),
    }));

  if (sortBy === "relevance") {
    results.sort((a, b) => b.relevance - a.relevance);
  } else if (sortBy === "date") {
    results.sort((a, b) => new Date(b.date) - new Date(a.date));
  }

  res.json(results);
});

// Get Article by ID (GET /articles/:id)
app.get("/articles/:id", (req, res) => {
  const { id } = req.params;
  const article = articles.find((a) => a.id === parseInt(id));

  if (!article) {
    return res.status(404).json({ error: "Article not found." });
  }

  res.json(article);
});

// === Start the Server ===
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

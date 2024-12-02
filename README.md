# skill-lab-milestone-1
Here’s how you can create the `README.md` file with the provided content:

1. Open your project directory in your code editor.
2. Create a new file named `README.md` in the root of your project.
3. Copy and paste the following content into your `README.md` file:

```markdown
# Mini Search Engine for Articles

## Overview
The Mini Search Engine enables users to upload and search articles efficiently. It supports keyword searches and relevance-based sorting. The backend is built using Express.js and supports both in-memory storage and optional persistence using a JSON file (`articles.json`).

## Features
- **Add Articles**: Add new articles with a title, content, and tags.
- **Search Articles**: Search articles by keywords in the title or content.
- **Sort Results**: Sort search results by relevance (keyword frequency) or by date.

## Endpoints

### 1. **POST /articles**
Add a new article with metadata (title, content, and tags).

**Request Body** (JSON):
```json
{
  "title": "Article Title",
  "content": "Article Content",
  "tags": ["tag1", "tag2"]
}
```

**Response** (JSON):
```json
{
  "message": "Article added successfully.",
  "article": {
    "id": 1,
    "title": "Article Title",
    "content": "Article Content",
    "tags": ["tag1", "tag2"],
    "date": "2024-12-01T12:00:00.000Z"
  }
}
```

### 2. **GET /articles/search**
Search articles by keyword or tag. Supports sorting by relevance or date.

**Query Parameters**:
- `keyword` (required): The keyword to search for in the title or content.
- `sortBy` (optional): Sort the results by `"relevance"` (default) or `"date"`.

**Example Request**:
```
GET http://localhost:3000/articles/search?keyword=keyword&sortBy=relevance
```

**Response** (JSON):
```json
[
  {
    "id": 1,
    "title": "Article Title",
    "content": "Article Content",
    "tags": ["tag1", "tag2"],
    "date": "2024-12-01T12:00:00.000Z",
    "relevance": 2
  }
]
```

### 3. **GET /articles/:id**
Retrieve the full details of an article by its ID.

**Example Request**:
```
GET http://localhost:3000/articles/1
```

**Response** (JSON):
```json
{
  "id": 1,
  "title": "Article Title",
  "content": "Article Content",
  "tags": ["tag1", "tag2"],
  "date": "2024-12-01T12:00:00.000Z"
}
```

## Requirements
- Node.js
- Express.js
- Body-Parser for handling JSON requests
- Optional: File system (fs) for saving articles to `articles.json`

## Solution Design
- **In-memory storage** for articles during runtime.
- **Persistence** with optional file storage using `articles.json` for saving articles.
- **Relevance-based sorting** by keyword frequency in title and content.
- **Date-based sorting** for recent articles.

## How to Run the Application

### 1. Clone the Repository
Clone the repository to your local machine:
```bash
git clone https://github.com/username/repository-name.git
```

### 2. Install Dependencies
Navigate to the project directory and install the required dependencies:
```bash
cd repository-name
npm install
```

### 3. Start the Server
Start the Express server:
```bash
npm start
```
The server will be running on `http://localhost:3000`.

## Testing with Postman

### 1. Add an Article (POST /articles)
1. Open Postman and select the **POST** method.
2. Enter the URL: `http://localhost:3000/articles`.
3. Set the **Body** to `raw` and choose `JSON` format.
4. Add a JSON payload like this:
```json
{
  "title": "Sample Article",
  "content": "This is the content of the article.",
  "tags": ["sample", "article"]
}
```
5. Hit **Send** to create the article. You should receive a response with the article details.

### 2. Search Articles (GET /articles/search)
1. Open Postman and select the **GET** method.
2. Enter the URL: `http://localhost:3000/articles/search?keyword=article&sortBy=relevance`.
3. Hit **Send** to search for articles containing the keyword "article" and sort by relevance.

### 3. Get Article by ID (GET /articles/:id)
1. Open Postman and select the **GET** method.
2. Enter the URL: `http://localhost:3000/articles/1` (replace `1` with the desired article ID).
3. Hit **Send** to retrieve the article by ID.

## Optional: Persistence with `articles.json`
If you want to persist the articles between server restarts, ensure that the `articles.json` file exists in the root directory of the project. The articles will be loaded from this file on server startup and saved back when new articles are added.

## License
This project is licensed under the MIT License.
```

### Steps to Save the `README.md`:
1. Open your project directory.
2. Create a new file named `README.md` if it doesn't exist.
3. Paste the above content into the `README.md` file.
4. Save the file.

Your project now has a detailed `README.md` file that explains how to run the application, use Postman to test the API, and interact with the endpoints. Let me know if you need further modifications!

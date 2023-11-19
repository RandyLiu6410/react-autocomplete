import trie from "./trie.js";
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/search", (req, res) => {
  const { query } = req.query;
  if (!query) {
    res.status(400).json({
      statusCode: 400,
      msg: `Query "query" is missing`,
      data: null,
    });
    return;
  }

  res.status(200).send({
    statusCode: 200,
    msg: "Success",
    data: {
      query,
      results: trie.search(query),
    },
  });
});

app.listen(8080, () => {
  console.log(`Server listen on 8080`);
});

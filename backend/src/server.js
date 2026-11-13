import "dotenv/config";
import express from "express";

const app = express();
const port = Number(process.env.PORT) || 4000;

app.use(express.json());

app.get("/", (_request, response) => {
  response.status(200).json({
    message: "TeamFlow backend is running"
  });
});

app.listen(port, () => {
  console.log(`TeamFlow backend listening at http://localhost:${port}`);
});

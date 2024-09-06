import express from "express";
import postRoute from "./routes/post.routes";

const app = express();

// middlewares
app.use(express.json());

// Routes
app.use("/api/posts", postRoute);

const PORT: number = 5000;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

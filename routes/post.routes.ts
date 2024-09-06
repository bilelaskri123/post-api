import { Router, Request, Response } from "express";

import Post from "../models/Post";
import CreatePostDto from "../dtos/create-post.dto";

const router = Router();

const posts: Post[] = [
  { id: 1, title: "post 1", body: "about post 1" },
  { id: 2, title: "post 2", body: "about post 2" },
];

// GET - Get All Posts
router.get("/", (req: Request, res: Response) => {
  res.status(200).json(posts);
});

router.post("/", (req: Request, res: Response) => {
  const { title, body } = req.body as CreatePostDto;
  const newPost = new Post(title, body);
  posts.push(newPost);
  res.status(201).json(newPost);
});

export default router;

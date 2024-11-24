import express from "express";
import { listarPosts, criarNovoPost } from "../controllers/postsController.js";

export default function routes(app){
    app.use(express.json());
    app.get("/posts",listarPosts)
    app.post("/posts", criarNovoPost)
}

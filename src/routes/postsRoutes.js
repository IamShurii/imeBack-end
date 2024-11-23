import express from "express";
import { listarPosts } from "../controllers/postsController.js";

export function routes(app){
    app.use(express.json());
    app.get("/posts",listarPosts)
}
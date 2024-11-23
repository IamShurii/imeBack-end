import express from "express";
import { getPosts } from "../../server";

const posts = await getPosts()

const routes = (app) => {
    app.use(express.json());
    app.get("/posts",(req,res) =>{
        res.status(200).json(posts);
    });
}
export default routes;


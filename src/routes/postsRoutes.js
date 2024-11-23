import express from "express";
import { getPosts } from "../../server";


const app = express();
const posts = await getPosts()

app.get("/posts",(req,res) =>{
    res.status(200).json(posts);
});
import express from "express";
import multer from "multer";
import { listarPosts, criarNovoPost, uploadImagem } from "../controllers/postsController.js";

const storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, './uploads');
    },
    filename: function(req, file, cb){
        cb(null, file.originalname);
    }
})

const mult = multer({dest: "./uploads", storage})

export default function routes(app){
    app.use(express.json());
    app.get("/posts",listarPosts)
    app.post("/posts", criarNovoPost)
    app.post("/upload", mult.single("Imagem") ,uploadImagem)
}

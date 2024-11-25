import express from "express";
import multer from "multer";
import cors from "cors"
import { listarPosts, criarNovoPost, uploadImagem, attNovoPost } from "../controllers/postsController.js";

const corsOptions = {
    origin: "http://localhost:8000",
    optionSuccessStatus: 200
}

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
    app.use(cors(corsOptions))
    app.get("/posts",listarPosts)
    app.post("/posts", criarNovoPost)
    app.post("/upload", mult.single("Imagem") ,uploadImagem)
    app.put("/upload/:id", attNovoPost )
}

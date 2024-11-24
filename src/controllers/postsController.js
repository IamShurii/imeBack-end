import express from "express"
import { getPosts, criarPost} from "../models/postsModel.js";

export async function listarPosts (req,res){
    const posts = await getPosts();
    res.status(200).json(posts);
};

export async function criarNovoPost(req, res) {
    const novoPost = req.body;
    try {
        const postFinal = await criarPost(novoPost)
        res.status(200).json(postFinal)
    }
    catch (error) {
        console.error(error.message)
        res.status(500).json({"erro": "Falha na requisição0"})
    }
}

export async function uploadImagem(req, res) {
    const novoUpload = req.body
    try {
        const upload = await criarUpload(novoUpload)
    } catch (error) {
        
    }
}
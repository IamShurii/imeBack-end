import express from "express"
import fs from "fs"
import { getPosts, criarPost, attPost } from "../models/postsModel.js";

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
    const novoUpload = {
        descricao: "",
        imgUrl: req.file.originalname,
        alt: ""
    }
    try {
        const postFinal = await criarPost(novoUpload)
        const imagemAtualizada = `uploads/${postFinal.insertedId}.png`
        fs.renameSync(req.file.path, imagemAtualizada)
        res.status(200).json(postFinal)
    }
    catch (error) {
        console.error(error.message)
        res.status(500).json({"erro": "Falha na requisição0"})
    }
}

export async function attNovoPost(req, res) {
    const id = req.params.id;
    const ulrImg = `https://localhost:3000/${id}.png`
    const post = {
        imgUrl: ulrImg,
        descricao: req.body.descricao,
        alt: req.body.alt
    }
    try {
        const postFinal = await attPost(id,post)
        res.status(200).json(postFinal)
    }
    catch (error) {
        console.error(error.message)
        res.status(500).json({"erro": "Falha na requisição0"})
    }
}
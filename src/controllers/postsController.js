import { getPosts } from "../models/postsModel.js";

export async function listarPosts (req,res){
    const posts = await getPosts();
    res.status(200).json(posts);
};

export async function criarNovoPost(req, res) {
    const novoPost = req.body();
    res.status
}
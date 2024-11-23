import { getPosts } from "../models/postsModel";

export async function listarPosts (req,res){
    const posts = await getPosts();
    res.status(200).json(posts);
};
import { ObjectId } from "mongodb";
import 'dotenv/config';
import conectarAoBanco from "../config/dbconfig.js"

const VariavelConexao = process.env.STRING_CONEXAO;
const conexao = await conectarAoBanco(VariavelConexao)

export async function getPosts(){
    const db = conexao.db("Imersão-InstaByte")
    const colecao = db.collection("posts")
    return colecao.find().toArray()
}

export async function criarPost(post) {
    const db = conexao.db("Imersão-InstaByte");
    const colecao = db.collection("posts");
    return colecao.insertOne(post)
}

export async function attPost(id , post) {
    const db = conexao.db("Imersão-InstaByte");
    const colecao = db.collection("posts");
    
    const objId = ObjectId.createFromHexString(id)
    
    return colecao.updateOne({_id: new ObjectId(objId)},{$set: post} )
}
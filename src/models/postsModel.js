import conectarAoBanco from "../config/dbconfig.js"

const VariavelConexao = process.env.STRING_CONEXAO;
const conexao = await conectarAoBanco(VariavelConexao)

export async function getPosts(){
    const db = conexao.db("Imersão-InstaByte")
    const colecao = db.collection("posts")
    return colecao.find().toArray()
}

export async function criarPost(body) {
    const db = conexao.db("Imersão-InstaByte");
    const colecao = db.collection("posts");
    return colecao.insertOne(body)
}
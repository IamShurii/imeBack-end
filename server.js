import express from "express";
import conectarAoBanco from "./src/config/dbconfig.js";
const VariavelConexao = process.env.STRING_CONEXAO;
const conexao = await conectarAoBanco(VariavelConexao)

const app = express();
app.use(express.json());

app.listen(3000, () => {
    console.log("Servidor escutando!");
});

async function getPosts(){
    const db = conexao.db("Imersão-InstaByte")
    const colecao = db.collection("posts")
    return colecao.find().toArray()
}

app.get("/posts", async(req,res) =>{
  const posts = await getPosts()
    res.status(200).json(posts);
});

//function localizarPostPorId(id){
//  return posts.findIndex((post) =>{
//      return post.id === Number(id)
//  })
//};

//app.get("/posts/:id", (req, res) =>{
//    const index = localizarPostPorId(req.params.id);
//    res.status(200).json(posts[index]);
//});
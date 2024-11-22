import express from "express";

const app = express();
app.use(express.json());

const posts = [
    {
      id: 1,
      descricao: "Uma foto de um gato",
      imagem: "https://placecats.com/millie/300/150"
    },
    {
      id: 2,
      descricao: "Uma paisagem montanhosa",
      imagem: "https://picsum.photos/seed/picsum/200/300"
    },
    {
      id: 3,
      descricao: "Um prato de comida deliciosa",
      imagem: "https://source.unsplash.com/random/200x300/?food"
    },
    {
      id: 4,
      descricao: "Uma cidade à noite",
      imagem: "https://unsplash.com/photos/night-city"
    },
    {
      id: 5,
      descricao: "Um pôr do sol na praia",
      imagem: "https://unsplash.com/s/photos/sunset"
    },
    {
      id: 6,
      descricao: "Um animal selvagem na natureza",
      imagem: "https://unsplash.com/s/photos/wildlife"
    }
];

app.listen(3000, () => {
    console.log("Servidor escutando!");
});

app.get("/posts", (req,res) =>{
    res.status(200).json(posts);
});

function localizarPostPorId(id){
  return posts.findIndex((post) =>{
      return post.id === Number(id)
  })
};

app.get("/posts/:id", (req, res) =>{
    const index = localizarPostPorId(req.params.id);
    res.status(200).json(posts[index]);
});
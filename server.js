import express from "express";

const app = express();

const posts = [
    {
      descricao: "Uma foto de um gato",
      imagem: "https://placecats.com/millie/300/150"
    },
    {
      descricao: "Uma paisagem montanhosa",
      imagem: "https://picsum.photos/seed/picsum/200/300"
    },
    {
      descricao: "Um prato de comida deliciosa",
      imagem: "https://source.unsplash.com/random/200x300/?food"
    },
    {
      descricao: "Uma cidade à noite",
      imagem: "https://unsplash.com/photos/night-city"
    },
    {
      descricao: "Um pôr do sol na praia",
      imagem: "https://unsplash.com/s/photos/sunset"
    },
    {
      descricao: "Um animal selvagem na natureza",
      imagem: "https://unsplash.com/s/photos/wildlife"
    }
];

app.listen(3000, () => {
    console.log("Servidor escutando!");
});

app.get("/api", (req,res) =>{
    res.status(200).send("Olá!!");
});
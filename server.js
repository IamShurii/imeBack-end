import express from "express";
import routes from "./src/routes/postsRoutes.js"

const app = express()

routes(app)

app.listen(3000, () => {
    console.log("Servidor escutando!");
});

app.get("/posts",(req,res) =>{
    res.status(200).json(posts);
});


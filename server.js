import express from "express";
import routes from "./src/routes/postsRoutes.js"
const port = process.env.PORT || 3000;
const app = express()

app.use(express.static("uploads"))

routes(app)

app.listen(port, () => {
    console.log("Servidor escutando!");
});

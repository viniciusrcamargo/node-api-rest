import express from "express";

const app = express();

const livros = [
    {
        id: 1,
        titulo: "O Senhor dos Anéis",
        autor: "J.R.R. Tolkien"
    },
    {
        id: 2,
        titulo: "O Hobbit",
        autor: "J.R.R. Tolkien"
    }]

app.get("/", (req, res) => {
    res.status(200).send("Curso de Node.js");
});

export default app;
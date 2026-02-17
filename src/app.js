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
    res.status(200).send("Curso de Node.js");//sent para enviar a resposta para o cliente, status para informar o status da resposta, 200 é sucesso
});
app.get("/livros", (req, res) => {
    res.status(200).json(livros);//json para enviar um objeto json para o cliente
});//json notação de objeto para objetos em javascript 

export default app;
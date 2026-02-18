import express from "express";

const app = express();
app.use(express.json());//middleware para transformar o corpo da requisição em um objeto json, para poder acessar os dados do corpo da requisição


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

function buscaLivro(id){
    return livros.findIndex(livro => {
        return livro.id === Number(id);
    })
}

app.get("/", (req, res) => {
    res.status(200).send("Curso de Node.js");//sent para enviar a resposta para o cliente, status para informar o status da resposta, 200 é sucesso
});
app.get("/livros", (req, res) => {
    res.status(200).json(livros);//json para enviar um objeto json para o cliente
});//json notação de objeto para objetos em javascript

app.get("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    res.status(200).json(livros[index]);
});//params para acessar os parâmetros da rota, parseInt para transformar o id em um número inteiro

app.post("/livros", (req, res)=> {
    livros.push(req.body);
    res.status(201).send("Livro adicionado com sucesso");
})

app.put("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    livros[index] = req.body;
    res.status(200).json(livros);
});

app.delete("/livros/:id", (req, res) =>{
    const index = buscaLivro(req.params.id);
    livros.splice(index, 1);//splice para remover um elemento do array, o primeiro parâmetro é o índice do elemento a ser removido, o segundo parâmetro é a quantidade de elementos a serem removidos
    res.status(200).json('livro removido com sucesso!\n', livros);
})

export default app;
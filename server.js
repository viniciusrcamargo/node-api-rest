import { log } from 'console';
import { write } from 'fs';
//import http from 'http';//biblioteca nativa
import app from "./src/app.js";//importando o app.js para o server.js

const PORT = 3000;//letra maiúscula no nome para informações estáticas

// const rotas = {
//     "/":"Curso de Node.js",
//     "/livrs": "Entrei na rota livros",
//     "/autores": "Entrei na rota autores"
// }

// const server = http.createServer((req,res) =>{
//     res.writeHead(200, {"Content-Type":"text/plain"});
//     res.end(rotas[req.url])
// })

app.listen(PORT,()=>{
    console.log('Servidor rodando na porta 3000');
    
})
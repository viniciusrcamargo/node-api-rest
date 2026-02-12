import { log } from 'console';
import { write } from 'fs';
import http from 'http';//biblioteca nativa

const PORT = 3000;//letra maiúscula no nome para informações estáticas

const server = http.createServer((req,res) =>{
    res.writeHead(200, {"Content-Type":"text/plain"});
    res.end('Curso de Node js')
})

server.listen(PORT,()=>{
    console.log('Servidor rodando na porta 3000');
    
})
const express = require("express");

const app = express();

app.get("/", (reqeust, response)=>{

    console.log(request);
    
    response.send("BOA NOITE, NÃO VAMOS NOS JOGAR DA JANELA HOJE, AMANHÃ TALVEZ!!!")
});

//app.listen(8080,(error)=> {
//    console.log(error);
//    if (error !== undefined){
//        console.log("Erro ao inicar serviço na porta!")
//    } else {
//        console.log("🐀 🐀 🐀 O servidor está rodando na porta 8080!");
//    }
//})

app.listen(8080, ()=> {
    console.log("🐀 🐀 🐀 O servidor está rodando na porta 8080!");  
})
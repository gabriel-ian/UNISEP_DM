import express from "express";

const app = new express();

app.use(express.json()); //cerealisação

app.listen(800, ()=>{
    console.log("O servidor está rodanddo na porta 8080");
});

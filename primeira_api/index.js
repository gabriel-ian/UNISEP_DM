const express = require("express");

const app = new express();

app.use(express.json());

var contador_id = 1;
var data = [{
    id: 1,
    nome: "Gabriel",
    CPF:"99999999999",
    status: true
}];

app.get("/listar", (request, response)=>{
    return response.send(data)

});

app.get("/listar/:id", (request, response)=>{
    const { id } = request.params;

    const pessoa = data.filter((item)=>{    
        return item.id == id
    });

    if (pessoa. length <= 0 ){
        response.status(400).send({
            //msg : "Pessoa do código " + id + "não encontrado!"    
            msg : `Pessoa do código ${id} não encontrado!`    
        });
    }

    response.send(pessoa);

});

app.post("/cadastrar", (request, response)=>{
    // const nome = request.body.nome;
    // const cpf = request.body.cpf;
    // const status = request.body.status;
    const { nome, cpf, status } = request.body;

    //console.log('DADOS DA PESSOA:');
    //console.log(nome);
    //console.log(cpf);
    //console.log(status);

    if (!cpf) {
        return response.status(300).send("O campo cpf é obrigatório");
    }

    contador_id++
    
    data.push({ id: contador_id, nome, cpf, status});

    return response.send("Pessoa cadastrada com sucesso!");
}); 


app.listen(8080, ()=>{
    console.log("O servidor está rodando na porta 8080!");
});


//status 500 = Erro Interno
//status 200 = Sucesso
//Status 400 = Não conseguiu encontrar determidada informação
//Status 300 = Validações
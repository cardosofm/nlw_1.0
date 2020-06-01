import express from 'express';

const app = express();

app.get('/users', (req,res)=>{
    res.json({
        "nome": "Fernando",
        "sobrenome": "Cardoso",
        "techs": "node.js , javascript"
    });
});

app.listen(3333);
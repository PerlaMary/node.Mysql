const express =  require ("express");
const Usuario = require('./models/Usuario');
const app = express();



app.use(express.json());

app.get("/products", async (req, res) => {
     
    await Usuario.findAll({order: [['id', 'ASC']]})
    .then ((products) =>{
        return res.json({
            erro: false,
            products
        });
    }).catch(() => {
        return res.status(400).json({
            erro: true,
            mensagem: "Erro:Nenhum usuário encontrado!!"
        });

    });

  
 
});

app.get("/product/:id", async (req, res) => {
    const{id} = req.params;

   // await Usuario.findAll({
     //   where: {
        //    id: id
    //    }
   // })
   await Usuario.findByPk(id)
    .then((product) => {
        return res.json({
            erro: false,
            product: product
        });
    }).catch(() => {
        return res.status(400).json({
            erro: true,
            mensagem: "Erro:Nenhum usuário encontrado!!"
        });

    });



});

app.post("/product", async (req, res) => {
    const{name, price} = req.body;

    await Usuario.create(req.body)
     .then(() => {
        return res.json({
            erro: false,
            mensagem: "Usuário cadastrado com sucesso!!"
        });

    }).catch(() =>{
        return res.status(400).json({
            erro: true,
            mensagem: "Erro: Usuário cadastrado sem sucesso!!"
        });

    });

   
});

app.put("/product", async (req, res) => {
    const {id} = req.body;

    await Usuario.update(req.body, {where: { id}})
    .then(() => {
        return res.json({
            erro: false,
            mensagem: " Usuário editado com sucesso!!"
        });

    }).catch(() => {
        return res.status(400).json({
            erro: true,
            mensagem: "Erro: Usuário editado sem sucesso!!"
        });

    })
   
});

app.delete("/product/:id", async (req, res) => {
    const{id} = req.params;

    await Usuario.destroy({where: {id}})
    .then(() =>{
        return res.json({
            erro: false,
            mensagem: " Usuário apagado com sucesso!!"
        });

    }).catch(() => {
        return res.status(400).json({
            erro: true,
            mensagem: "Erro: Usuário apagado sem sucesso!!"
        });
    });
  
});

app.listen(8083,() => {
    console.log("Servidor iniciado na porta 8083: http://localhost:8083");
});
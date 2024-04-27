const express = require ('express')
const app = new express()
const port = 8000
app.listen (port,()=>{
    console.log('Demarrage du server')
});

app.get('/hello', (rep,resp)=> {

resp.send("bonjour");
});

app.get('/', (rep,resp)=> {

    resp.json("hello");
    });

    app.get("/hello/:nom",(req,resp)=> {

        const nom = req.params.nom
        resp.send( "bonjour" + nom);
        });

    app.get("/hello/:nom",(req,resp)=> {

        const nom = req.params.nom
        resp.send( "bonjour" + nom);
 }); 


 get('/tableau', (req, res) => {
    res.json(tableau);
  });

  /*app.get('/tableau/:index', (req, res) => {
    const index = req.params.index;
    if (index >= 0 && index < tableau.length) {
      res.json(tableau[index]);
    } else {
      res.status(404).send('Index hors limites');
    }
  });*/



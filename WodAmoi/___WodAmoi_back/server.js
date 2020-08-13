require('colors'); // affichage des coleurs dans la console.
const {say} = require('cowsay'); // affichage de la vache dans la console.
const express = require("express"); // facilite et solidifie la connection HTTP server, egalement pour les routes.
const bodyParser = require("body-parser"); // permet de récuperer/traduire les données des "body" (req.body).
const cors = require("cors"); //middleware qui met en relation Express et NodeJs.

const app = express();

// indique la route/port pour lancer Angular.
var corsOptions = {
  origin: "http://localhost:4200"
};

app.use(cors(corsOptions));

//...
app.use(bodyParser.json());

//...
app.use(bodyParser.urlencoded({ extended: true }));

// connection a la base de donnees. Plus indication des erreurs dans la console.
const db = require("./app/models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('------------------------------'.rainbow);
    console.log('-: Mongoose connection open :-');
    console.log('------------------------------'.rainbow);
  })
  .catch(err => {
    console.log('------------------------------'.red);
    console.log('------------------------------'.red);
    console.log('-: Cannot connect to the database! :-', err);
    console.log('------------------------------'.red);
    console.log('------------------------------'.red);
    process.exit();
  });

  
// simple route http://localhost:3000/ 
app.get("/", (req, res) => {
  res.json({ message: "Bienvenue sur WodAmoi. Redirigez-vous sur http://localhost:4200" });
});

//Appel de la route pour la collection wods
require("./app/routes/wod.routes")(app);
//Appel de la route pour la collection mouvements
require("./app/routes/mvt.routes")(app);
//Appel de la route pour la collection entrainements
require("./app/routes/training.routes")(app);

//config du serveur sur le port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
      console.log(say({ text: 'Running on port 3000'.bgBrightYellow.gray }));
  });
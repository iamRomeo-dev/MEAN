module.exports = app => {
  const mesWods = require("../controllers/wod.controller.js");

  var router = require("express").Router();

  // Creation d'un nouveau wod
  router.post("/", mesWods.create);

  // Recuperation de tout les wods
  router.get("/", mesWods.findAll);

  // Recuperation de tout les wods publiés !!!!!!!
  router.get("/published", mesWods.findAllPublished);

  // Recuperation d'un seul Wod par id
  router.get("/:id", mesWods.findOne);

  // Modifie un wod avec id
  router.put("/:id", mesWods.update);

  // Supprime un wod avec id
  router.delete("/:id", mesWods.delete);

  //lien pour rejoindre Angular
  app.use('/api/WodAmoi_wods', router);
};
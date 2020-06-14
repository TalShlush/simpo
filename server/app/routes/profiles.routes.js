module.exports = app => {
  const profiles = require("../controllers/profiles.controller.js");

  var router = require("express").Router();

  // Create a new profile
  router.post("/", profiles.create)

  // Retrieve all profiles
  router.get("/", profiles.findAll);

  // Retrieve a single profile with id
  router.get("/:id", profiles.findOne);

  // Update a Tutorial with id
  router.put("/:id", profiles.update);

  app.use('/api/profiles', router);
};

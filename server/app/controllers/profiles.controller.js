const db = require("../models");
const Profiles = db.Profiles;

// Create and Save a new Profiles
exports.create = async (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Profiles
  const { name, bio, fb_id } = req.body
  const profile = {name,bio,fb_id}

  // Save Profiles in the database
  try{
    const result = await Profiles.create(profile);
    res.send(result)
  }catch(err){
    res.status(500).send({
      message:err.message || `Some error occurred while creating the profiles.`
    });
  }
};

// Retrieve all profiles from the database.
exports.findAll = async (req, res) => {
  try{
    const profiles = await Profiles.findAll({attributes: ['id', 'name']});
    res.send(profiles);
  }catch(err){
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving profiles."
    });
  }
};

// Find a single profile with an id
exports.findOne = async (req, res) => {
  const id = req.params.id;
  try{
    const profile = await Profiles.findByPk(id);
    res.send(profile);
  }catch(err){
        res.status(500).send({
        message: `Error retrieving Profiles with id= ${id}`
      });
  }
};

// Update a Profiles by the id in the request
exports.update = async (req, res) => {
  const id = req.params.id;

  const { name, bio, fb_id } = req.body
  const profile = {name,bio,fb_id}
  
  try{
    const result = await Profiles.update(profile, {
      where: { id: id }
    });

    if(result[0] === 1){
      res.send({
        message: "Profiles was updated successfully."
      });
    }
    else{
      res.send({
        message: `Cannot update profiles with id=${id}. Maybe profiles was not found or req.body is empty!`
      });
    }
  }catch(err){
    res.status(500).send({
      message: `Error updating profiles with id= ${id}`
    });
  }
};

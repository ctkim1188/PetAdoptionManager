const Pets = require('../models/exam.models')

module.exports.displayAll = (req, res) => {
    Pets.find().sort({type : 'asc'})
        .then(allPets => res.json(allPets))
        .catch(err => res.json(err))
}

module.exports.createPet = (req, res) => {
    Pets.create(req.body)
        .then(newPet => res.json({pet : newPet}))
        .catch(err => res.status(400).json(err))
}

module.exports.deletePet = (req, res) => {
    Pets.deleteOne({_id : req.params.id})
        .then(deletedPet => res.json(deletedPet))
        .catch(err => res.json(err))
}

module.exports.getOnePet = (req, res) => {
    Pets.findOne({_id : req.params.id})
        .then(thePet => res.json(thePet))
        .catch(err => res.json(err))
}

module.exports.updatePet = (req, res) => {
    Pets.findOneAndUpdate({_id : req.params.id}, req.body, {runValidators : true, new: true, context:'query'})
        .then(updatedPet => res.json(updatedPet))
        .catch(err => res.status(400).json(err))
}
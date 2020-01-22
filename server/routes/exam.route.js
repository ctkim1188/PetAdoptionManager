const PetController = require('../controllers/exam.controller')

module.exports = app => {
    app.get('/api/pets', PetController.displayAll),
    app.post('/api/pets/create', PetController.createPet),
    app.delete('/api/pet/:id', PetController.deletePet),
    app.put('/api/pet/:id', PetController.updatePet),
    app.get('/api/pet/:id', PetController.getOnePet)
}
const { Router } = require('express');
const { goToHome, goToUserList, goToPetsList } = require('../controllers/views.controller');

const router = Router();

router.get('/', goToHome);
router.get('/users', goToUserList)
router.get('/pets', goToPetsList)


module.exports = {
    viewsRouter: router 
};
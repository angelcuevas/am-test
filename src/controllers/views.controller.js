const { usersService, petsService } = require("../services")

const goToHome = (req, res)=>{
    res.render('home')
}

const goToUserList = async (req, res)=>{
    const users = await usersService.getAll();
    res.render('users',{users})
}

const goToPetsList = async (req, res)=>{
    const pets = await petsService.getAll();
    res.render('pets',{users: pets})
}

module.exports = {
    goToHome,
    goToUserList,
    goToPetsList
}
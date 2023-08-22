const Express = require('express');
const { UserModel } = require('../models');
const router = Express.Router();

router.post('/register', async (req, res) => {

    let { userName, password, admin } = req.body.user;

    await UserModel.create({
        userName,
        password,
        admin
    })

    res.send('IT WORKS!!!!!!!!!!')
})


module.exports = router
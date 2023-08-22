const Express = require('express');
const { UserModel } = require('../models');
const router = Express.Router();

router.post('/register', async (req, res) => {

    let { userName, password, admin } = req.body.user;

    try{
        const User = await UserModel.create({
        userName,
        password,
        admin
        });

        res.status(201).json({
            message: 'User registred',
            user: User
        });
    } catch (err) {
        res.status(500).json({
            message: `User did not register. Error at user controller. ${err}`
        });
    }
});


module.exports = router
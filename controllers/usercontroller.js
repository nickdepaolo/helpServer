const Express = require('express');
const router = Express.Router();
const { UserModel } = require('../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')

router.post('/register', async (req, res) => {

    let { userName, password, admin } = req.body.user;

    try{

        const User = await UserModel.create({
        userName,
        password: bcrypt.hashSync(password, 13),
        admin
        });

        let token = jwt.sign({id: User.id, userName: User.userName}, process.env.JWT_SECRET, {expiresIn: 60 * 60 * 24});

        res.status(201).json({
            message: 'User registred',
            user: User,
            sessionToken: token
        });

    } catch (err) {

        res.status(500).json({
            message: `User did not register. Error at user controller. ${err}`
        });

    }

});


router.post('/login', async (req, res) => {

    let { userName, password } = req.body.user;

    try{

        let User = await UserModel.findOne({

            where: {
                userName: userName,
            },

        });

        
        if (User) {

            let passwordComparison = await bcrypt.compare(password, User.password);
            
            if (passwordComparison) {   
                let token = jwt.sign({id: User.id, userName: User.userName}, process.env.JWT_SECRET, {expiresIn: 60 * 60 * 24});

                res.status(200).json({
                    message: 'User logged in.',
                    user: User,
                    sessionToken: token
                });

            } else {
                res.status(401).json({
                    message: 'Incorrect user name or password'
                })
            }

        } else {

            res.status(401).json({
                message: 'Incorrect user name or password'
            });

        }

    } catch (err) {

        res.status(500).json({
            message: `User did not log in. Error at user controller. ${err}`
        });

    }

});


module.exports = router
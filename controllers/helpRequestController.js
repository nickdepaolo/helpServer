const Express = require('express');
const { HelpRequestModel } = require('../models');
const router = Express.Router();

router.post('/register', async (req, res) => {

    let { clientName, issue, room } = req.body.help;

    await HelpRequestModel.create({
        clientName,
        issue,
        room
    })
    
    res.send('IT WORKS!!!!!!!!!!')
})


module.exports = router
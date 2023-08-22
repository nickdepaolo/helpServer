const Express = require('express');
const { HelpRequestModel } = require('../models');
const router = Express.Router();

router.post('/register', async (req, res) => {

    let { clientName, issue, room } = req.body.help;

    try{
        const HelpRequest = await HelpRequestModel.create({
        clientName,
        issue,
        room
        });

        res.status(201).json({
            message: 'Request registered',
            helpRequest: HelpRequest
        });

    } catch (err) {
        res.status(500).json({
            message: `Error in system, at help request controller. ${err}`
        });
    }
    
    
});


module.exports = router
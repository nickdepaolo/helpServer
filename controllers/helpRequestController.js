const Express = require('express');
const { HelpRequestModel } = require('../models');
const router = Express.Router();
let validateJWT = require('../middleware/validate-JWT')

// Post help request from client
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

// Get all request entries
router.get('/', async(req,res) => {
    try {

        const entries = await HelpRequestModel.findAll();
        res.status(200).json(entries);

    } catch (err) {

        res.status(500).json({error: err});

    }
});

// Delete help request
router.delete("/delete/:id", async(req, res) => {
    const helpId = req.params.id;

    try {
        console.log(req.params.id)
        const query = {
            where: {
                id: helpId,
            },
        };

        await HelpRequestModel.destroy(query);
        res.status(200).json({message: 'Help request removed and sent to the achive'})

    } catch (error){

        res.status(500).json({error: error})

    }
});

module.exports = router
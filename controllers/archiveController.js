const Express = require('express');
const { ArchiveModel } = require('../models');
const router = Express.Router();

router.post('/register', async (req, res) => {

    let { clientName, issue, room } = req.body.help;

    try{
        const ArchiveRequest = await ArchiveModel.create({
        clientName,
        issue,
        room
        });

        res.status(201).json({
            message: 'Archive registered',
            archiveRequest: ArchiveRequest
        });

    } catch (err) {
        res.status(500).json({
            message: `Error in system, at archive controller. ${err}`
        });
    }
})


module.exports = router
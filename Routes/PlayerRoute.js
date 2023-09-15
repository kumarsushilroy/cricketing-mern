
const express = require('express');
const { createPlayer, getPlayer, createTeamB, getTeamB } = require('../Controllers/PlayerCtrl');

const middleware = require('../MiddleWare/middleware')

const router = express.Router();

//CREATE PLAYER
router.route('/create/player',middleware).post(createPlayer);


//GET PLAYER  
router.route('/getAll/player',middleware).get(getPlayer);

//Create Team B  
router.route('/create/teamB',middleware).post(createTeamB);

//Get Team B
router.route('/getAll/teamB',middleware).get(getTeamB);



module.exports = router;
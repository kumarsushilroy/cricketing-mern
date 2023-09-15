
const playerModel = require('../Models/PlayerModel');
const teamBModel = require('../Models/TeamBmodel')


const createPlayer = async(req,res)=>{
  try {
    const {name} = req.body;
    if(!name){
        return res.status(401).send({
            success:false,
            msg:'this field is required !'
        })
    }
    
    const makePlayer = new playerModel({name});
    const player = await makePlayer.save();
    res.status(201).send({
        success:true,
        msg:'player created',
        player
    })

  } catch (error) {
    console.log(error)
    res.status(404).send({
        success:false,
        msg:'something went wrong !',
        error
    })
  }
}

const getPlayer = async(req,res)=>{
   try {
    const getplayers = await playerModel.find({});
    res.status(201).send({
        success:true,
        msg:'players list found',
        getplayers
    })
   } catch (error) {
    console.log(error);
    res.status(404).send({
        success:false,
        msg:'something went wrong !'
    })
   }
}


//Create Team B
const createTeamB = async(req,res)=>{
  try {
    const {playername} = req.body;
    if(!playername){
        return res.status(401).send({
            success:false,
            msg:'this field is required !'
        })
    }
    
    const makePlayer = new teamBModel({playername});
    const TeamB = await makePlayer.save();
    res.status(201).send({
        success:true,
        msg:'player created',
        TeamB
    })

  } catch (error) {
    console.log(error)
    res.status(404).send({
        success:false,
        msg:'something went wrong !',
        error
    })
  }
}


//Get TeamB
const getTeamB = async(req,res)=>{
  try {
   const TeamB = await teamBModel.find({});
   res.status(201).send({
       success:true,
       msg:'players list found',
       TeamB
   })
  } catch (error) {
   console.log(error);
   res.status(404).send({
       success:false,
       msg:'something went wrong !'
   })
  }
}


module.exports = {createPlayer, getPlayer, createTeamB, getTeamB}
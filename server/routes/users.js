const express = require('express');
const router = express.Router();
const data = require('../data/user');

const app = express();
const axios = require('axios');
const path = require('path');
///////////////////////////////////////////////////////////////////////////////////////
router.post('/', async (req, res) =>
{
    let body = req.body;
  if(!body)
  {
    return res.status(400).json({ error:"Error: There is no data"});
  }
  let username = body.signupUsername;
  let password = body.signupPassword;
  let name = body.name;
  
  try{
    const returnVal  = await data.create(name, username, password);
    res.status(200).json(returnVal);
  }
  catch(e)
  {
   res.status(400).json({error: e})
   console.log(e);
  }

  //data.create
  //res status whatever create returns
  //catch like prof in database
})
router.post('/signin', async(req,res) =>{
    let dataParams = req.body
    if(!dataParams)
    {
        return res.status("400").json({error:"Error: not all data points given"})
    }
    let username = dataParams.username
    let password = dataParams.password
    try{
        let result = await data.signIn(username,password)
        return res.status(200).json(result)
    }catch(e){
        return res.status(400).json({error:e})
    }
})
router.get("/:id", async(req,res)=>{
    let id = req.params.id
    try{
        let result = await data.getUser(id)
        return res.status(200).json(result)
    }catch(e){
        return res.status(400).json({error:e})
    }
})
router.get("/userStack/:id", async(req,res)=>{
    let id = req.params.id
    try{
        let result = await data.getUserSets(id)
        return res.status(200).json(result)
    }catch(e){
        return res.status(400).json({error:e})
    }
})
module.exports = router; 

const createPoll= (req,res)=>{
    console.log(req.body);
    res.send(req.body);
}

module.exports={createPoll};
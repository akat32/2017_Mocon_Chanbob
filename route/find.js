module.exports = (router, Hos)=>{
  router.post('/food', async (req,res)=>{
    const result = await Hos.find(req.body);
    
    if(result) return res.status(200).json(result);
    else return res.status(404).json({message: "category not found"});
  })
  return router;
}

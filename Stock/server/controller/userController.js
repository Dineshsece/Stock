const signUpService = require('../services/userservice');

 exports.register = async(req,res) =>{
    try{
        const {username,email,doubt} = req.body;
       
        const success= await signUpService.userRegistration(username,email,doubt);
       
       console.log(success);
        res.send(success);
        
    }catch(err){
       res.json({status:false,message:"Email id is already taken"});
    }
}

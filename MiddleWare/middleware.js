
const jwt = require('jsonwebtoken')
module.exports = (req, res, next)=>{
    const tokenn = req.headers[authorization];
    if(tokenn){
        const token = req.headers['authorization'].split(' ')[1];
         jwt.verify(token, process.env.SECRET_KEY, (err, decode)=>{
            if(err){
                res.status(401).send({
                    sucess:false,
                    msg:'please provide valid token !'
                })
            }else{
              req.body.userId = decode.id;
              next();
            }
         })
    }else{
        res.status(401).send({
            success:false,
            msg:'please provide token !'
        })
    }
  


}
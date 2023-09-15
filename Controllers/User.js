
const UserModel = require('../Models/UserModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const createUser = async(req,res)=>{

    try {

        const {username, email, password} = req.body;

       if(!username || !email || !password){
        return res.status(401).send({
            success:false,
            msg:'all fields required !',
        })
       }

       const salt = await bcrypt.genSalt(10);
       const hashPass = await bcrypt.hash(password, salt)
      
       const user =  new UserModel({username, email, password:hashPass});
       const newUser = await user.save();

    //   return res.status(201).send({
    //     success:true,
    //     msg:'registration success',
    //     newUser
    //    })

    const token = jwt.sign({id:user._id}, process.env.SECRET_KEY, {expiresIn:"1d"},(err, token)=>{
        if(err){
            res.status(401).send({
                success:false,
                msg:'error while getting token',
                err
            })
        }else{
            res.status(201).send({
                success:true,
                msg:'login success',
                newUser,
                Token:token 
            })
        }
    })


    } catch (error) {
        console.log(error); 
        res.status(404).send({
            success:false,
            msg:'something went wrong !',
            error
        })
    }
};

//Login
const LoginUser = async(req,res)=>{
    try {
        const {email, password} = req.body;
        if(!email || !password){
            return res.status(401).send({
                success:false,
                msg:'all fields require !'
            })
        }

        const user = await UserModel.findOne({email});
        if(!user){
            res.status(401).send({
                success:false,
                msg:'please enter valid email !' 
            })
        }

        const validpassword = await bcrypt.compare(password,user.password);
        if(!validpassword){
            res.status(401).send({
                success:false,
                msg:'enter valid password !'
            })
        }

        const token = jwt.sign({id:user._id}, process.env.SECRET_KEY, {expiresIn:"1d"},(err, token)=>{
            if(err){
                res.status(401).send({
                    success:false,
                    msg:'error while getting token',
                    err
                })
            }else{
                res.status(201).send({
                    success:true,
                    msg:'login success',
                    user,
                    Token:token 
                })
            }
        })

        
    } catch (error) {
        console.log(error),
        res.status(404).send({
            success:false,
            msg:'something went wrong !',
            error
        })

    }
}

const getUser = async ()=>{

};


module.exports = {createUser, getUser, LoginUser}
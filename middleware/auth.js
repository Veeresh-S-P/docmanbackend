require("dotenv").config()

const jwt=require("jsonwebtoken")

const auth=(req,res,next)=>{
    try{
        const token=req.headers.authoorization.split("")[1]

        const decoded =jwt.verify(token,process.env.secretkey)

        if(!decoded){
            return res.status(401).send({
                isError:true,
                msg:"please login"
            })

        }else{
            next()
        }
    }catch(error){
        return res.status(401).send({
            isError:true,
            msg:"error.message"
        })
    }
}


module.exports={
    auth
}
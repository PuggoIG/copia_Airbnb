const {Users} = require ("../models");
const jwt = require ("jsonwebtoken");

const SECRET_KEY= "textorandom";

const tokenPrefix= "JWT"


module.exports=(token)=>{
    if(!token) throw new Error("No token provided")
        const [prefix,receivedToken]= token.split(" ");
    if(!receivedToken) throw new Error("No Token Provided")

    if(prefix != tokenPrefix) throw new Error ("Invalid header format")

    let payload = jwt.verify(receivedToken, SECRET_KEY)

    return Users.findOne({where:{id:payload.id}})


}
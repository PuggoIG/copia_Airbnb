const jwt = require("jsonwebtoken");

const SECRET_KEY = "textorandom"


module.exports = (user) => {

    return new Promise((resolve,reject) => {
        let payload = {
            id:user.id,
            email:user.email
        }
        jwt.sign(payload,SECRET_KEY,(err,token) => {
            if(err) reject(err)
            resolve(token)
        })


    })
}
const{Houses,Facilities,Addresses,Users} = require("../models");

const createHouse = async(req,res) => {
    try{
        req.body.UserId=req.user.id
        const house = await Houses.create(req.body)
        if(!house) res.status(400).json({"message":"Error to create house"})
        const address =  await Addresses.create({...req.body.address,HousesId:house.id})
        if(!address) res.status(400).json({"message":"Error to create address"})
        const facilities =  await Facilities.create({...req.body.facilities,HousesId:house.id})
        if(!facilities) res.status(400).json({"message":"Error to create facilities"})
        return res.status(200).json({"message":"House created successfully","id":house.id})
    }catch(e){
        return res.status(400).json(e)
    }
}
as:"address"
const getAllHouses = async (req,res)=>{
    let allHouses = await Houses.findAll({where:{},include:[
        {
            model:Users,
            as:"user"
            
        },
        {
            model:Facilities,
            as:"facilities"
            
        },
        {
            model:Addresses,
            as:"address"
            
        }
    ]})
    
    return res.status(200).json(allHouses)


}

const getOneHouse = async(req,res) =>{
    let getHouse = await Houses.findOne({where:{id:req.params.id},include:[
        {
            model:Users,
            as:"user"
            
        },
        {
            model:Facilities,
            as:"facilities"
            
        },
        {
            model:Addresses,
            as:"address"
            
        }
    ]})
    
    return res.status(200).json(getHouse)


}


module.exports = {
    createHouse,
    getAllHouses,
    getOneHouse
}
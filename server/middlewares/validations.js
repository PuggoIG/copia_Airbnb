const {celebrate,Joi} = require("celebrate");


const calculatePriceValidation= celebrate({
    body:{
        date_init:Joi.date().required(),
            date_due:Joi.date().required(),
            houseId:Joi.string().required()
    }
})


module.exports ={
    calculatePriceValidation
}
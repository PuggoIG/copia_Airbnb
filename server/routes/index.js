const  express =  require("express");
const router = express.Router();
const isAuthenticated= require("../middlewares/isAuthenticated");
const {calculatePriceValidation} = require ("../middlewares/validations");
const {signUp,logIn,me} =  require("../controllers/users");
const {createHouse,getAllHouses,getOneHouse}= require("../controllers/houses");
const{calculatePrice,createBooking}=require("../controllers/bookings")

//router.use('/users/',require('./user'));

router.post('/users/signup',signUp);
router.post("/users/login",logIn);
router.get("/users/me",isAuthenticated,me);

router.post("/houses",isAuthenticated,createHouse);
router.get("/houses",getAllHouses);
router.get("/houses/:id",getOneHouse);

router.post("/bookings/calculate",calculatePriceValidation,calculatePrice);
router.post("/bookings",isAuthenticated,createBooking);






module.exports = router;


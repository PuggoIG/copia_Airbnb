const {Users, Houses, Bookings, Addresses, Facilities, Comments} = require ('../models')

module.exports = () =>{
   Users.truncate({
       cascade:true
   }),
   Houses.truncate({
       cascade:true
   }),
   Facilities.truncate({
       cascade:true
   }),
   Addresses.truncate({
       cascade:true
   }),
   Bookings.truncate({
       cascade:true
   }),
   Comments.truncate({
       cascade:true
   })

}
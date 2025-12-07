const mongoose = require('mongoose')
mongoose.connect("mongodb://127.0.0.1:27017/scratch")

.then(function(){
    console.log("Server connect")
})
.catch(function(err){
    console.log(err)
})

module.exports = mongoose.connection;
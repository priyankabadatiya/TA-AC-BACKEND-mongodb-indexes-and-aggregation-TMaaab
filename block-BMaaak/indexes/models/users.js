let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let userSchema = new Schema({
    name: String,
    username: {type: String, unqiue: true},
    email: {type: String, unqiue: true},
    address: {
        city: String,
        state: String,
        country: String,
        pin: Number
    }
}, {timestamps: true});


userSchema.index({email:1,unique:true})
userSchema.index({username:1,unique:true})
userSchema.index({state:1,city:1})

module.exports = mongoose.model("User", userSchema);

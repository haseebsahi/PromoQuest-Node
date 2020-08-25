const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// require('mongoose-currency').loadType(mongoose);
// const Currency = mongoose.Types.Currency;

var userSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    email:
    {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        default: false
    }
    
}, {
    timestamps: true
});

var Users = mongoose.model('User', userSchema);

module.exports = Users;
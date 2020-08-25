const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// require('mongoose-currency').loadType(mongoose);
// const Currency = mongoose.Types.Currency;

var agencySchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    // image: {
    //     type: String,
    //     required: true
    // },
    // label: {
    //      type: String,
    //      default: ''
    // },
    contactPerson: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    contact: {
        type: Number,
        required: true
    },
    status: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
});

var Agencys = mongoose.model('Agency', agencySchema);

module.exports = Agencys;
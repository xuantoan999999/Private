'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    email: {
        type: String
    },
    name: {
        type: String
    },
    password: {
        type: String
    },
    roles: [{
        type: String,
        enum: ['admin', 'user', 'supper_admin']
    }]
}, {
        collection: 'user',
        timestamps: true
    }
);

module.exports = mongoose.model('User', UserSchema);
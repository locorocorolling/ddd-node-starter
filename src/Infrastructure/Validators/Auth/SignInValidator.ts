import * as joi from 'joi';

module.exports = {
    body: {
        email: joi.string().email().required(),
        password: joi.string().regex(/[a-zA-Z0-9]{3,30}/).required()
    }
};
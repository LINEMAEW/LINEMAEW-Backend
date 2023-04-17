const bcrypt = require('bcrypt');
const Users = require('../models/Users');

const registerUser = async (req, res) => {
    const { username, email, password, phone_number, address } = req.body;


    if (!username || !email || !password || !phone_number || !address) {
        res.status(500).json({"message": 'Please fill in all fields'});
    }


    await Users.createUser(req, res)

}

module.exports = {
    registerUser
}
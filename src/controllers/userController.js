const bcrypt = require('bcrypt');
const Users = require('../models/Users');

const loginUserController =  (req, res) => {
    c
    

    Users.getUser(req, res).then((user) => {

        if (user) {
            let cmp = bcrypt.compare(password, user.password).then((match) => {
                if (match) {
                    req.session.userId = user._id;
                    res.redirect('/home');
                } else {
                    res.redirect('/login');
                }
            })
        } else {
            res.redirect('/login');
        }
    })
}

const registerUser = async (req, res) => {
    const { username, email, password, phone_number, address } = req.body;


    if (!username || !email || !password || !phone_number || !address) {
        res.status(500).json({"message": 'Please fill in all fields'});
    }


    await Users.createUser(req, res)

}


const registerRestaurant = async (req, res) => {
    const { restaurant_name, description, phone_number, address, password } = req.body;


    if (!restaurant_name || !description || !phone_number || !address || !password) {
        res.status(500).json({"message": 'Please fill in all fields'});
    }


    await Users.createUser(req, res)

}


module.exports = {
    loginUserController,
    registerUser
}
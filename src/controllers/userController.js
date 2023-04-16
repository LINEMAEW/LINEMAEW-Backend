const bcrypt = require('bcrypt');
const Users = require('../models/Users');

const loginUserController =  (req, res) => {
    const { email, password } = req.body;

    Users.getUser(req, res).then((user) => {
        console.log(user);

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

// const banan = (req, res) => {
//     User.create(req.body).then(() => {
//         console.log("User registered successfully!")
//         res.redirect('/');
//     }).catch((error) => {
//         // console.log(error.errors);
//         if (error) {
//             const validationErrors = Object.keys(error.errors).map(key => error.errors[key].message);
//             req.flash('validationErrors', validationErrors);
//             req.flash('data', req.body);
//             return res.redirect('/register')
//         }
//     });
// }

const registerRestaurantController = (req, res) => {

}

module.exports = {
    loginUserController,
    registerUser
}
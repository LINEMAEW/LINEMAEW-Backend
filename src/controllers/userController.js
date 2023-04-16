const bcrypt = require('bcrypt');
const Users = require('../models/Users');

const loginUserController =  (req, res) => {
    const { email, password } = req.body;

    Users.getAllUsers(req, res).then((user) => {
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

const registerController = (req, res) => {
    let email = "";
    let password = "";
    let data = req.flash('data')[0]

    console.log(data);
        
    if (typeof data != "undefined") {
        email = data.email;
        password = data.password;
    }
        
    res.render('register', {
            errors: req.flash('validationErrors'),
            email: email,
            password: password
    });
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

// module.exports = 

const registerRestaurantController = (req, res) => {

}

module.exports = {
    loginUserController,
    registerUserController,
}
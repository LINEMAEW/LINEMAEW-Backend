const sql =  require('mssql');
require('dotenv').config()

const config = {
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_NAME,
    server: process.env.DB_SERVER,
    options: {
        encrypt: false,
    }
}

const test = async(res) => {
    try {
        let con = await sql.connect(config);
        let request = new sql.Request(con);

        const result = await request.query('SELECT * FROM Users');
        return result;
    } 
    catch (err) {
        res.status(500).send('Error connecting to the database');
        console.log(err);
    } finally {
        sql.close();
    }
}

// const restaurantLogin = async ()

module.exports = {
    userLogin
}
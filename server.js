let express = require('express');
let cors = require('cors');
let test = require('./src/routes/SomeRoute');

let app = express();

require('dotenv').config()
app.use(cors());

app.use('/SomeRoute', test)

app.listen(process.env.PORT, () => console.log(`server is running on port ${PORT}`))
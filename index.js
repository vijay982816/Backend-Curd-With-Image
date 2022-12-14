const express = require('express')
var cors = require('cors')
const connectToMongo = require('./Database/db.js')


//for using .env file or variables
// require('dotenv').config()


// creating a server 

const app = express()


//bypassing  cors
app.use(cors())

//for parsing the incoming requests with JSON payloads

app.use(express.json())

//connecting to Db[MongoDb]
connectToMongo()


// Available Routes
app.use('/user/', require('./Routes/User.js'));
app.use('/admin/', require('./Routes/Admin.js'));
app.use('/bill/', require('./Routes/Bill.js'))




// configure the server's port 

const port = process.env.PORT || 3000;

//listening server on a port 

app.listen(port, err => {
    if (err)
        throw err
    console.log('Server listening on port', port)
})

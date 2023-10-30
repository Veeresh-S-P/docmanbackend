const express = require('express');

const cors = require('cors')

const { connection } = require('./config/db');
const { userRouter } = require('./routes/user.route');
const { docRouter } = require('./routes/doctor.route');



const app = express()

const PORT = process.env.PORT || 1110;

app.use(express.json())

app.use(cors())

app.use('/', userRouter)

app.use('/doctor', docRouter)


app.listen(PORT, async () => {
    try {
        await connection
        console.log('DB connected');
    } catch (error) {
        console.log(error);
    }
    console.log('server is runnning on port ', PORT);
})
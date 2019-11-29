const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user');
const driverRouter = require('./routers/driver');
const paymentRoute = require('./routers/pay');
const tripRoute = require('./routers/trip');
const app = express();
var cors = require('cors');
app.use(cors());

let port = process.env.PORT || 4000;
app.use(express.json())
app.use(userRouter);
app.use(driverRouter);
app.use(paymentRoute);
app.use(tripRoute);

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})
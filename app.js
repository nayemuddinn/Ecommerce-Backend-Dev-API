const express = require('express')
const app = express();
require('dotenv').config();


const dbConnection = require('./db/connection/connect')
const PORT = process.env.PORT




//  routers
const authRouter = require('./routes/authRoutes');
const userRouter = require('./routes/userRoutes');
const productRouter = require('./routes/productRoutes');
const reviewRouter = require('./routes/reviewRoutes');
const orderRouter = require('./routes/orderRoutes');

app.use(express.json())

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/products', productRouter);
app.use('/api/v1/reviews', reviewRouter);
app.use('/api/v1/orders', orderRouter);


const start = () => {
    try {
        dbConnection(process.env.MONGO_URI);
        app.listen(PORT, () => console.log(`Server running at PORT: ${PORT}`))
    } catch (err) {
        console.log(err);
    }
}


start();

const mongoose = require('mongoose');

const connectDB = async () => {
    const connection = await mongoose.connect(process.env.DB_URI);

    console.log(`MongoDB connected ${connection.connection.host}`.cyan.underline.bold)
}

module.exports = connectDB
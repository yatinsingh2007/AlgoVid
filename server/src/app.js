require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const { auth } = require('./auth/auth');

const { prisma } = require('../prisma/prismaConfig');

const cors = require('cors');
const app = express();
app.use(cors({
    origin: `${process.env.CLIENT_URL}`,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
}));
app.use(express.json());
app.use(cookieParser());

app.use('/api/auth' , auth);


app.get('/', (req, res) => {
    res.send('API is running...');
});

async function main() {
  try {
    await prisma.$connect();
    console.log("Database connected successfully");
    app.listen(process.env.PORT , () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  } catch (err) {
    console.error("Error connecting to the database:", err);
  }
}


main()
.catch((e) => {
    console.log("Error in Connecting to Database:", e);
}).finally(async () => {
    await prisma.$disconnect();
});

module.exports = { app };
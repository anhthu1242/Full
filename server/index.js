require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const user = require('./models/User');
const post = require('./models/Post');
const authRouter = require('./routers/auth');
const postRouter = require('./routers/post');

const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.DB_USENAME}:${process.env.DB_PASSWORD}@testapp.vtgqz.mongodb.net/?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log('MongoBD connected');
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};

connectDB();

const app = express();
app.use(express.json());

app.use('/api/auth', authRouter);
app.use('/api/posts', postRouter);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

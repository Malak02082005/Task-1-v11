require('dotenv').config();
 
const express = require('express');
const mongoose = require('mongoose');
const Event = require('./models/event.model.js');
const eventRoutes = require('./routes/event.route.js');

const dns = require("dns");
dns.setServers(['8.8.8.8'],['1.1.1.1'])

const app = express();
 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
 
// routes
app.use('/api/events', eventRoutes);
 
app.get('/', (req, res) => {
  res.send('Hello from node tut');
});
 
const PORT = process.env.PORT || 3000;
 
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
 
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });
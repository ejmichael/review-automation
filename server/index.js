const express = require('express');
const cors = require('cors');
const reviewRouter = require('./src/routes/reviewRoute');
const connectToMongoDB = require('./src/db');
const businessRouter = require('./src/routes/businessRoute');
const payfastRouter = require('./src/routes/payfastRoute');
const dotenv = require('dotenv').config();
 
const app = express();



(async () => {
    try {
        // Connect to MongoDB
        await connectToMongoDB();
        
        // Middleware
        app.use(express.json());
        app.use(cors({ 
            origin: "http://localhost:3000"
          }));
        //app.use(cors());
        app.use(express.urlencoded({ extended: true }));

        // Routes
        app.get('/', (req, res) => {
            res.send("Home Route");
        });


        app.use('/review', reviewRouter) 
        app.use('/business', businessRouter) 
        app.use('/api/payfast', payfastRouter)
          

        // Start the server
        const port = process.env.PORT || 5000; // Use the port from .env or default to 5000
        app.listen(port, () => {
            console.log("Listening on port " + port);
        });
    } catch (error) {
        console.error('Failed to connect to MongoDB:', error);
        process.exit(1); // Exit the process if the connection fails
    }
})();

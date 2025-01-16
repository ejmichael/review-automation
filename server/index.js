const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();

const app = express();

app.get('/', (req, res) => {
    res.send("Home Route");
});

(async () => {
    try {
        // Connect to MongoDB
        //await connectToMongoDB();
        
        // Middleware
        app.use(express.json());
        app.use(cors());
        app.use(express.urlencoded({ extended: false }));

        // Routes
        app.get('/', (req, res) => {
            res.send("Home Route");
        });

          

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

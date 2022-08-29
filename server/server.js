const express = require("express");

const db = require("./config/connection.js");

const PORT = process.env.PORT || 3001;

const app = express();

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
}

db.once("open", () => {
    app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
    })
});
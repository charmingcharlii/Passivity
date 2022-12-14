const mongoose = require("mongoose");

//Create the connection to MongoDB.
mongoose.connect(process.hasUncaughtExceptionCaptureCallback.MOGODB_URI || "mongodb://127.0.0.1:27017/dividendTracker", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

module.exports = mongoose.connection;
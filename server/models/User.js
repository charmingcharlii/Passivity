const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");
const stockSchema = require('./Stock')

//Creates a user schema for users.
const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true
        },

        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, "Must follow an email address format."]
        },

        password: {
            type: String,
            required: true
        },

        userPortfolio: {
            type: Schema.Types.ObjectId,
            ref: "Portfolio",
        }

    },
    {
        toJSON: {
            virtuals: true
        }
    }
);

//Salt and hash password if it is a new user.
userSchema.pre("save", async function (next) {
    if(this.isNew || this.isModified("password")) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }
});

//Take in a password, compare with bcrypt to stored password.
userSchema.methods.checkPassword = async function (password) {
    return bcrypt.compare(password, this.password);
}

const User = model("User", userSchema);

module.exports = User;


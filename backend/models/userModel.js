const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, " Please Enter Your Name "],
    maxLength: [30, "Name cannot exceed 30 characters "],
    minLength: [4, "Name should have more than 4 characters "],
  },

  email: {
    type: String,
    required: [true, " Please Enter Your Email "],
    unique: true,
    validate: [validator.isEmail, "Please Enter a Valid Email"], // to make sure that it is an email
  },

  password: {
    type: String,
    required: [true, "Please Enter Your Password"],
    minLength: [8, " Password  should be greater  than 8 characters "],
    select: false,
    // password should not be shown to others
  },
  avatar: {
    public_id: {
      type: String,
      required: true,
    },

    url: {
      type: String,
      required: true,
    },
  },
  role: {
    type: String,
    default: "user",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },

  resetPasswordToken: String,
  resetPasswordExpire: Date,
});

// we can't use "this" in arrow function
userSchema.pre("save", async function (next) {
  // "this" is referring to the userSchema

  if (!this.isModified("password")) {
    next();
    // going to the next parameter
  }

  this.password = await bcrypt.hash(this.password, 10);
});

// JWT TOKEN
userSchema.methods.getJWTToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    // expiresIn:process.env.JWT_EXPIRE * 24 * 60 *60  * 1000,
  });
};

// Compare Password
userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Generating Password Reset Token
userSchema.methods.getResetPasswordToken = function () {
  // generating token
  const resetToken = crypto.randomBytes(20).toString("hex");

  // Hashing and adding resetpassword token  to UserSchema
  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  this.resetPasswordExpire = Date.now() + 15 * 60 * 1000;
  return resetToken;
};
module.exports = mongoose.model("User", userSchema);

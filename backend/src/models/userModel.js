const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, required: true },
    image: { type: [Number], validate: [arrayLengthValidator, 'Image must contain 784 numerical entries'] },
    predictionNumber: { type: Number },
    correctNumber: { type: Number },
    prediction: { type: Boolean }
});

function arrayLengthValidator(arr) {
    return arr.length === 784;
  }

const User = mongoose.model("User", UserSchema);

module.exports = User;

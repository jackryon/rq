var mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  bcrypt = require('bcrypt')

var UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    dropDups: true,
    lowercase: true,
    trim: true
  },
  fullName: {
    type: String,
    trim: true,
    required: true
  },
  hashPassword: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

UserSchema.methods.comparePassword = function(password){
  return bcrypt.compareSync(password, this.hashPassword)
}

module.exports = mongoose.model('User', UserSchema)

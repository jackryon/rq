let mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  bcrypt = require('bcrypt')

let UserSchema = new Schema({
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
  },
  confirmed: {
    type: Boolean,
    default: false
  },
  confirmationToken: {
    type: String
  }
})

UserSchema.path('email').validate(email => {
  let emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/
  return emailRegex.test(email)
}, 'Email invalid')

UserSchema.methods.comparePassword = function(password){
  return bcrypt.compareSync(password, this.hashPassword)
}

module.exports = mongoose.model('User', UserSchema)

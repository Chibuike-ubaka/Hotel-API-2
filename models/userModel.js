const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    role: {
      type: String,
      enum: ['guest', 'admin'],
      default: 'guest'
    }
  });
  
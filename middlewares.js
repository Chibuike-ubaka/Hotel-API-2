const authenticateToken = (req, res, next) => {
    // implementation code
  }
  
  const authorize = (role) => {
    return (req, res, next) => {
      // implementation code
    }
  }
  
  const validate = (schema) => {
    return (req, res, next) => {
      // implementation code
    }
  }
  
  module.exports = {
    authenticateToken,
    authorize,
    validate,
  };
  
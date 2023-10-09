class ErrorHandler extends Error {
  constructor(
    message,
    statusCode // constructor of this class
  ) {
    super(message); // sending message to the parent class Error
    this.statusCode = statusCode;

    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = ErrorHandler;

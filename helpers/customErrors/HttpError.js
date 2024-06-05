const HttpError = class extends Error {
  /**
      @param status http status code
      @param message error message
  */
  constructor(status, message) {
      super(message);
      this.name = this.constructor.name;
      this.status = status;
  }
};

export default HttpError;
import HttpError from "./HttpError";

const InputError = class extends HttpError {
   /**
      @param name indicates a field with incorrect input
      @param message error message
  */
  constructor(status, field, message) {
    super.constructor(status, message);
    this.field = field;
  }

  
};

export default InputError;
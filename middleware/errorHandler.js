import HttpError from "../helpers/customErrors/HttpError.js";
import ValidationError from "../helpers/customErrors/ValidationError.js";

const errorHandler = (err, req, res, next) => {
  if (err instanceof HttpError) {
    res.status(err.status).json({ errors: err.message });
  } else if (err instanceof ValidationError) {
    res.status(err.status).json({ errors: err.message });
  } else {
    console.error(err);
    res.status(500).json({ errors: "Something went wrong" });
  }
  next();
}

export default errorHandler;
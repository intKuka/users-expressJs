import HttpError from "../helpers/customErrors/HttpError.js";

const errorHandler = (err, req, res, next) => {
  if (err instanceof HttpError) {
    res.status(err.status).json({ message: err.message });
  } else {
    console.error(err);
    res.status(500).json({ message: "Something went wrong" });
  }
  next();
}

export default errorHandler;
import { param } from "express-validator";

const validationSchema = {

};

function checkIntId(req, res, next) {
  return param('id')
    .isInt().withMessage("must be an integer")
    .isInt({gt: 0}).withMessage("must be greater than 0");
}

function checkUserBody(req, res, next) {
  next();
}

export {
  checkIntId,
  checkUserBody,
}
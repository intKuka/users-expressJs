import { body, param } from "express-validator";

// use to verify body for POST/create operation
const userSchema = {
  name: { 
    notEmpty: {
      errorMessage: 'field required',
    },
  },
  age: {
    notEmpty: {
      errorMessage: 'field required',
    }, 
    isInt: { 
      errorMessage: 'must be an integer',      
    }, 
    custom: {
      errorMessage: 'must be greater than 0',
      options: gt0,
    },
  },
};

function checkIntId(req, res) {
  return param('id')
    .isInt().withMessage("must be an integer")
    .custom(gt0).withMessage("must be greater than 0");
}

// use to verify body for PUT/PATCH/update operation
function checkUserUpdateValues(req, res) {
  return [
    body('name')
      .optional()
      .isLength({ min: 1 }).withMessage("must be at least 1 symbol long"),
    body('age')
      .optional()
      .isInt().withMessage("must be an integer")
      .custom(gt0).withMessage("must be greater than 0"),
  ];
}

async function gt0(value) {
  if (value <= 0) {
    reject();
  }
}

export {
  userSchema,
  checkIntId,
  checkUserUpdateValues,
}
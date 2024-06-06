import { default as db } from '../../../db/sqlite3/sqlite3.js';
import HttpError from '../../../helpers/customErrors/HttpError.js';
import { checkSchema, validationResult } from 'express-validator';
import ValidationError from '../../../helpers/customErrors/ValidationError.js';

// @desc Get all users
// @route GET /api/users
function getAll(req, res, next) {
  db.listUsers()
    .then(result => {
      res.status(200).json(result);
    })
    .catch(next);
}

// @desc Get user by id
// @route GET /api/users/:id
function getById(req, res, next) {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    return next(new ValidationError(result));
  }

  const id = parseInt(req.params.id);
  db.findUserById(id)
    .then(user => {
      res.status(200).json(user);
    })
    .catch(next);
}

// @desc Create user using json body
// @route POST /api/users
function postOne(req, res, next) {
  // FIXME: validate user's input
  const { name, age } = req.body;

  db.createUser( {name, age } )
    .then(userId => {
      res.status(201).json(userId);
    })
    .catch(next);
}

// @desc Update user using json body
// @route PATCH /api/users/:id
function patchById(req, res, next) {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    return next(new ValidationError(result));
  }

  const id = parseInt(req.params.id);
  db.updateUser(id, newUser)
    .then(() => {
      res.sendStatus(200);
    })
    .catch(next);
}

// @desc Delete user by id
// @route DELETE /api/users/:id
function deleteById(req, res, next) {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    return next(new ValidationError(result));
  }

  const id = parseInt(req.params.id);
  db.deleteById(id)
    .then(() => {
      res.sendStatus(200);
    })
    .catch(next);
}

export default { 
  getAll,
  getById,
  postOne,
  patchById,
  deleteById,
}


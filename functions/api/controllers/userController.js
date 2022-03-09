// const { json } = require('body-parser');
const {
  // db,
  admin,
  // auth
} = require('../../db');
// const User = require('../models/user');

const postUser = async (req, res) => {
  const newUser = {
    email: req.body.email,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword,
    handler: req.body.handler,
  };

  // TODO: validate data
  admin
    .auth()
    .createUserWithEmailAndPassword(newUser.email)
    .then((data) =>
      res.status(201).json({ message: 'user signed up successfully', data })
    )
    .catch((error) =>
      // console.error(error);
      res.status(500).json({ error: error.code })
    );
};
/*
const getAllUser = async (_req, _res) => {};

const getOneUser = async (_req, _res) => {};

const putUser = async (_req, _res) => {};

const patchUser = async (_req, _res) => {};

const deleteUser = async (_req, _res) => {};
*/
module.exports = {
  postUser,
  // getAllUser,
  // getOneUser,
  // putUser,
  // patchUser,
  // deleteUser,
};

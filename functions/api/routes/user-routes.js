const router = require('express').Router();
const {
  postUser,
  // getAllUser,
  // getOneUser,
  // putUser,
  // patchUser,
  // deleteUser,
} = require('../controllers/userController');
// router.post("/signup", postUser);

// TODO: get to Read All User ID
router.get('/', (_req, res) => {
  res.send(`here is /All User ID`);
});
// TODO: get to Read User ID
router.get('/:id', (_req, res) => {
  res.send(`here is /User ID`);
});

// TODO: post to Create User Email with Password
router.get('/create', (_req, res) => {
  res.send(`here is /User Creator`);
});

// TODO: put to Update User by ID
router.get('/update/:id', (_req, res) => {
  res.send(`here is /User Editor`);
});

// TODO: patch to Update User by ID
router.get('/upgrade/:id', (_req, res) => {
  res.send(`here is /User Editor`);
});

// TODO: delete User by ID
router.get('/delete/:id', (_req, res) => {
  res.send(`here is /User Deletor`);
});

router.post('/signup', postUser);

module.exports = router;

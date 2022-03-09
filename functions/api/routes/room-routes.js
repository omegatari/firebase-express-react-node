const router = require('express').Router();

const {
  postRoom,
  getAllRoom,
  getOneRoom,
  putRoom,
  patchRoom,
  deleteRoom,
} = require('../controllers/roomController');

// TODO: get to Read All Room ID
router.get('/', getAllRoom);

// TODO: get to Read Room ID
router.get('/:id', getOneRoom);

// TODO: post to Create Room
router.post('/create', postRoom);

// TODO: put to Update Room by ID
router.put('/update/:id', putRoom);

// TODO: patch to Update Room by ID
router.patch('/upgrade/:id', patchRoom);

// TODO: delete User by ID
router.delete('/delete/:id', deleteRoom);

module.exports = router;

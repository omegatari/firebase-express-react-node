// const { json } = require('body-parser');
const { db } = require('../../db');
// const Room = require('../models/room');

const postRoom = async (req, res) => {
  /*
  const newRoom = {
      roomName: req.body.roomName,
      roomSubject: req.body.roomSubject,
      roomYear: req.body.roomYear,
      roomDesciption: req.body.roomDesciption,
      roomImage: req.body.roomImage,
      // createdAt: admin.firestore.FieldValue.serverTimestamp(),
      createdAt: new Date().toISOString(),
    };

  await db
    .collection('rooms')
    .add(newRoom)
    .then((docRef) => {
      res.status(200).json({ "Document written with ID: " }, docRef.id);
    })
    .catch((error) => {
      // res.status(400).json(error.message);
      res.status(500).json(error.message);
      // console.error('Error adding document: ', error);
    });
   */

  try {
    const newRoom = {
      roomName: req.body.roomName,
      roomSubject: req.body.roomSubject,
      roomYear: req.body.roomYear,
      roomDesciption: req.body.roomDesciption,
      roomImage: req.body.roomImage,
      // createdAt: admin.firestore.FieldValue.serverTimestamp(),
      createdAt: new Date().toISOString(),
    };
    await db.collection('rooms').doc().set(newRoom);
    // res.send('Record room');
    res.status(200).send('Room Recorded');
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const getAllRoom = async (_req, res) => {
  await db
    .collection('rooms')
    .orderBy('createdAt', 'desc')
    .get()
    .then((data) => {
      const roomsArray = [];
      data.forEach((doc) => {
        // rooms.push(doc.data);
        roomsArray.push({
          roomId: doc.id,
          roomName: doc.data().roomName,
          roomSubject: doc.data().roomSubject,
          roomYear: doc.data().roomYear,
          roomDesciption: doc.data().roomDesciption,
          roomImage: doc.data().roomImage,
          createdAt: doc.data().createdAt,
        });
      });
      return res.status(200).json(roomsArray);
      // res.send("Record room");
    })
    .catch(
      (error) => res.status(400).send(error.message)
      // console.error('Error adding document: ', error);
    );
};

const getOneRoom = async (req, res) => {
  try {
    const { id } = req.params;
    const room = await db.collection('rooms').doc(id);
    const data = await room.get();
    if (!data.exists) {
      res.status(404).send('room with the given ID not found');
    } else {
      res.send(data.data());
    }
  } catch (error) {
    res.send(error.message);
  }
};

const putRoom = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const room = await db.collection('rooms').doc(id);
    await room.update(data);
    res.send('room record updated successfuly');
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const patchRoom = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const room = await db.collection('rooms').doc(id);
    await room.update(data);
    res.send('room record updated successfuly');
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const deleteRoom = async (req, res) => {
  try {
    const { id } = req.params;
    await db.collection('rooms').doc(id).delete();
    res.send('Record deleted successfuly');
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  postRoom,
  getAllRoom,
  getOneRoom,
  putRoom,
  patchRoom,
  deleteRoom,
};

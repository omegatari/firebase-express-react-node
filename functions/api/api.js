const router = require('express').Router();
const userRoute = require('./routes/user-routes');
const roomRoute = require('./routes/room-routes');

router.use('/room', roomRoute);
router.use('/user', userRoute);

router.get('/', (_req, res) => {
  res.send(`here is api index`);
});

module.exports = router;

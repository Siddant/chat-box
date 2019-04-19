const router = require('express').Router()

const authController = require('../controllers/auth')
const chatroomController = require('../controllers/chatroom')
const socketRoutes = require('../controllers/socket')



//*** AUTH ROUTES **//
router.post('/register', authController.register)
router.post('/login', authController.login)


router.post('/chatroom', chatroomController.create)
router.get('/chatroom', chatroomController.show)
router.put('/chatroom', chatroomController.update)

router.post('/testing', chatroomController.createTesting)

router.all('/*', (req, res) => res.sendStatus(404))

module.exports = router
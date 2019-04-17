const router = require('express').Router()

const authController = require('../controllers/auth')
const messageController = require('../controllers/chatroom')



//*** AUTH ROUTES **//
router.post('/register', authController.register)
router.post('/login', authController.login)


router.post('/chatroom', messageController.create)
router.get('/chatroom', messageController.show)

router.all('/*', (req, res) => res.sendStatus(404))

module.exports = router
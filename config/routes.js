const router = require('express').Router()

const authController = require('../controllers/auth')




//*** AUTH ROUTES **//
router.post('/register', authController.register)
router.post('/login', authController.login)



router.all('/*', (req, res) => res.sendStatus(404))

module.exports = router
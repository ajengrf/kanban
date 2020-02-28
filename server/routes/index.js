const express = require('express')
const router = express.Router()
const registerRoute = require('./register')
const loginRoute = require('./login')
const taskRoute = require('./task')
const auth = require('../middlewares/authentication')

router.use('/register', registerRoute)
router.use('/login', loginRoute)

router.use(auth)

router.use('/task', taskRoute)

module.exports = router
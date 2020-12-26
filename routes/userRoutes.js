const express = require("express")
 
const router = express.Router()

const addUser = require("../controller/userController")
const viewUser = require("../controller/viewController")
const viewSingleUser = require("../controller/viewSingleDataController")
const updateUser = require("../controller/updateController")
const deleteUser = require("../controller/deleteUser")


router.post('/add',addUser)
router.get('/view',viewUser)
router.get('/:id',viewSingleUser)
router.put('/:id',updateUser)
router.delete('/:id',deleteUser)


module.exports = router


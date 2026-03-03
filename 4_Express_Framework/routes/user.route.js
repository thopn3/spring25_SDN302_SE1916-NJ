const express = require('express');
const { verifyAuthen } = require('../middlewares/checkerror');

// router được gọi là phiên bản thu gọn của express
const router = express.Router();
// Bổ sung middleware để kiểm soát định dạng dữ liệu: I/O
router.use(express.json())


// Định nghĩa các End-Point cho từng chức năng
// GET /users -> Get all users
router.get('/', [verifyAuthen, ], async(req, res) => {
    try {
        res.status(200).json({result: 'List of users'})
    } catch (error) {
        console.log(`Error: ${error.message}`)
    }
})

// POST /users -> Add new an user
router.post('/', async(req, res) => {
    try {
        res.status(201).json({
            message: 'Add new success',
            savedData: {
                name: req.body.name,
                address: req.body.address
            }
        })
    } catch (error) {
        console.log(`Error: ${error.message}`)
    }
})


// GET /users/:id -> Get user by Id
router.get('/:id', async(req, res) => {
    try {
        res.status(200).json({result: `User with id: ${req.params.id}`})
    } catch (error) {
        console.log(`Error: ${error.message}`)
    }
})

// PUT /users/:id -> Edit an user by Id
router.put('/:id', async(req, res) => {
    try {
        res.status(200).json({result: `Edit user with id: ${req.params.id}`})
    } catch (error) {
        console.log(`Error: ${error.message}`)
    }
})

// DELETE /users/:id -> Remove an user by Id
router.delete('/:id', async(req, res) => {
    try {
        res.status(200).json({result: `Delete user with id: ${req.params.id}`})
    } catch (error) {
        console.log(`Error: ${error.message}`)
    }
})

module.exports = router


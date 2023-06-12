const express = require('express')
const router = express.Router()

router.get('/', (request,response) => {

     response.send("Digital Marketing Service")
    
    })

module.exports = router
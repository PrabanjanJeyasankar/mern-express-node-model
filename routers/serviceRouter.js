const express = require('express')
const router = express('router')
const bugFixingRouter = require('../service/bugFixingRouter')
const developmentRouter = require('../service/webDevelopment')


const services = [
    {
        name :"Web Development"
    } ,
    {
        name :"bug fixing"
    },
    {
        name :"Digital Marketing"
    },
    {
        name: " Dummy Service"
    }
]

router.get('/:id([0-9]{1})', (request,response) =>{
    response.json(`${request.service.name}`)
})

router.param('id',(request,response,next,id)=>{
    console.log(id)
    request.service = services[id]
    next()
})

router.use('/bugFixingRouter',bugFixingRouter)
router.use('/developmentRouter',developmentRouter)


module.exports = router
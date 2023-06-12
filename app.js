const express = require('express')
const app = express()
const getContactUs = require('./routers/contactRouter')
const getAboutUs = require('./routers/aboutRouter')
const getService = require('./routers/serviceRouter')

app.get('/', (request,response)=>{
    response.send('App.js')
})

app.use('/api/v1/contactus', getContactUs)
app.use('/api/v1/aboutus', getAboutUs)
app.use('/api/v1/service', getService)



app.listen(3500)
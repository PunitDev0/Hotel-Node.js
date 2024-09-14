import express from 'express'
import db from './db.js'
import bodyParser from 'body-parser'
import cors from 'cors'
const app = express()
import personRoutes from './routes/PersonRoutes.js'
import menuRoutes from './routes/MenuRoutes.js';
app.use(bodyParser.json())
app.use(cors())
app.use('/person', personRoutes)
app.use('/menu', menuRoutes)
app.get('/', (req, res)=>{
    res.send('GET request received')
})

app.listen(3000,()=>{
    console.log('Server is running on port 3000')
})
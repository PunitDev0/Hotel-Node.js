import express from 'express'
import db from './db.js'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import cors from 'cors'
const app = express()
import personRoutes from './routes/PersonRoutes.js'
import menuRoutes from './routes/MenuRoutes.js';
app.use(bodyParser.json())
dotenv.config()
app.use(cors())
app.use('/person', personRoutes)
app.use('/menu', menuRoutes)
app.get('/', (req, res)=>{
    res.send('GET request received')
})
const PORT = process.env.PORT || 6000
app.listen(PORT,()=>{
    console.log('Server is running')
})
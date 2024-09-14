import express from 'express'
import db from './db.js'
import Person from './Models/Person.js' 
import bodyParser from 'body-parser'
import cors from 'cors'
const app = express()
app.use(bodyParser.json())
app.use(cors())
// Middleware to parse JSON request bodies
app.get('/', (req, res)=>{
    res.send('GET request received')
})

app.post('/person', async (req, res)=>{
    try{
        const data = req.body

        const newPerson = new Person(data)

        const response = await newPerson.save() 
        console.log('Data saved');
        res.status(200).json(response)
        
    }catch(error){
        console.log(e);
        res.status(500).json({error: "internal error"})
    }
})

// Middleware to validate user input

app.listen(3000,()=>{
    console.log('Server is running on port 3000')
})
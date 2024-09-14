import express from 'express';
import Person from '../Models/Person.js' 

const router = express.Router();

router.get('/', async (req, res)=>{
    try{
        const newPerson = await Person.find()
        console.log("newPerson");
        res.status(200).json(response)
    }catch(error){
        console.log(e);
        res.status(500).json({error: "internal error"})
    }
})
router.post('/', async (req, res)=>{
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

router.get('/:worktype', async (res, rej) => {
    try{
     if(worktype === "chef" || worktype === "weighter" || worktype === "manager"){
         const response = await Person.find({work: worktype})
         console.log("fetched worktype");
         res.status(200).json(response)
     }else{
         res.status(400).json({error: "Invalid work type"})
     }
    }catch(error){
     console.log("error");
     res.status(500).json({error: "internal error"})
    }
 })

export default router;
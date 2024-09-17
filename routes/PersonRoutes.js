import express from 'express';
import Person from '../Models/Person.js' 

const router = express.Router();

router.get('/', async (req, res)=>{
    try{
        const newPerson = await Person.find()
        console.log("newPerson");
        res.status(200).json(newPerson)
    }catch(error){
        console.log(error);
        res.status(500).json({error: "internal error"})
    }
})
router.post('/signup', async (req, res)=>{
    try{
        
        const data = req.body

        const newPerson = new Person(data)

        const response = await newPerson.save() 
        console.log('Data saved');
        res.status(200).json(response)
        
    }catch(error){
        console.log(error);
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

 router.put('/:id', async(req, res) =>{
    try{
        const userID = req.params.id;
        const personUpdate = req.body;
        const response = await Person.findByIdAndUpdate(userID,personUpdate, {
            new: true,
            runValidators: true,
        })
    }catch(err){
        console.log(err);
        
    }
 })

 router.delete('/:id', async ()=>{
    try{
        const userID = req.params.id;
        const response = await Person.findByIdAndDelete(userID);    

    }catch(err){
        console.log(err);
    }
 })

export default router;
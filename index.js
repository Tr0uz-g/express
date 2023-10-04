const express = require('express');
const app = express()
const port = 3000;

const list = [
    {
        "id":"123456",
        "isCompleted":false,
        "description":"Walk the dog",
    }
]

app.get('/', (req, res)=>{
    res.json(list)
})


app.listen(port, ()=>{
    console.log(`server up in http://localhost:${port}`)
})
const express = require('express')
const app = express()
const PORT = 3000

app.get('/', (req, res)=> res.send('Hello World,7376222IT184,MadhankumarS\n'))
app.get('/vijay',(req, res)=>res.send('student name: vijay, Roll no:7376221cd103,CSD'))
app.listen(PORT, () => console.log(`Example app listenning at http://localhost:${PORT}`))
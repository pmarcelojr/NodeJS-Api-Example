const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = 3000

const data = [
    { id: 1, name: "mike", age: 22, company: "Nascetur Mus Company"},
    { id: 2, name: "Eleanor", age: 42, company: "Hendrerit Donec LLP"},
    { id: 3, name: "Dylan", age: 51, company: "Nisi Incorporated"},
    { id: 4, name: "Leila", age: 30, company: "Eros Non Limited"},
    { id: 5, name: "Jason", age: 31, company: "Accumsan Interdum Associates"}
]

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Metodo GET
app.get('/', (req, res) => {
    const result = {name: 'marcelo', instagram: 'pmarcelojr'}
    return res.json(result)
})
// Metodo POST
app.post('/', (req, res) => {
    const name = req.body.name
    const site = req.body.site
    return res.json([site, name])
})
// metodo PUT
//http://localhost:3000/:id
app.put('/:id', (req, res) => {
    const id = req.params.id
    const item = data.find(item => item.id == id)
    return res.json([item])
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
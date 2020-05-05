const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = 3000

app.use(express.json())
//app.use(bodyParser.urlencoded({ extended: true }))

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
//http://localhost:3000/:identificador
app.put('/:identificador', (req, res) => {
    const identificador = req.params.identificador
    console.log(identificador)
    return res.json([identificador])
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
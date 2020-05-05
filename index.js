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

app.post('/', (req, res) => {
    const name = req.body.name
    const site = req.body.site
    console.log(site, name)
    return res.json([site, name])
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
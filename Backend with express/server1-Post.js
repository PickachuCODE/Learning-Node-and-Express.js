const server = require("express");
const { products, users } = require("./json");
const Authorize = require("./MiddleWare/Authorize");
let Logger = require("./MiddleWare/Logger");
const path = require("path");
const nodemon = require("nodemon");


const app = server();
const port = 5000;

app.use('/', server.static(path.join(__dirname, 'Public')))
app.use(server.urlencoded({
    extended: false,

}))

app.post('/login', (req, res) => {
    console.log(req.body);
    const { name } = req.body
    if (name) {
        return res.status(201).send({status: "valid", data:[...users, {name: name, id: users.length+1}]})
    }
    res.status(401).send("Name error : add a name");
})
app.delete('/api/users/:id', (req, res) => {
    const { id } = req.params
    const findPerson = users.find((user) => user.id === Number(id))
    if (!findPerson) {
        return res.status(404).send(`user with id: ${id} not found`)   
    }
    const newUsers = users.filter((user) => user.id !== Number(id))
    return res.status(200).send(newUsers)   
})
app.put('/api/users/:id', (req, res) => {
    const { id } = req.params;
    const { name } = req.query
    const findPerson = users.find((user) => user.id === Number(id));
    if (!findPerson) {
        return res.status(404).send(`user with id: ${id} not found`)   
    }
    if (name) {
        let newUser = { name: findPerson.name = name, id: id }
        return res.status(201).send([user])
          
    }
})
app.get('/api/users', (req, res) => {
    res.status(200).json({status:'valid', users})
})

app.listen(port, () => {
    console.log(`SERVER: running on port ${port}... http://localhost:${port}/`);
});



 
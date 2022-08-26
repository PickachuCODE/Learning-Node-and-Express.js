const server = require('express')
const { products } = require('./json')

const app = server()
const port = 5000

// middleware



app.get('/', (req, res) => {
    res.send("Hello world")
})
app.get('/about', (req, res)=>{
    res.send("About Page")
})
app.get('/products', (req, res) => {
    const newProducts = products.map((product) => {
        const {productName, price, discription} = product
        return {productName, price, discription}
    })
    res.json(newProducts);
})
app.get('/api/product/query', (req, res) => {
    console.log(req.query);
    const {search} = req.query
    let newProducts = [...products]
    if (search) {
          newProducts = products.filter((product)=>{
            return product.productName.startsWith(search.toLocaleLowerCase())
          })
    }
    if(newProducts.length < 1){
        return res.status(200).send("Search not found") 
    }
    res.send(newProducts) 
})
app.get('/products/:id', (req, res)=>{
    console.log(req.params);
    const { id } = req.params
    const newProducts = products.find((product)=>product.id === Number(id))
    if(!newProducts){
        res.status(404).send("404 url not found")
    }
    res.json(newProducts)
})
app.all('*', (req, res)=>{
    res.status(404).send("404 url not found")
})


app.listen(port, ()=>{
    console.log(`SERVER: running on port ${port}... http://localhost:${port}/`)
})

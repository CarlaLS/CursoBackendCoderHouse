const {Router} = require('express')

const routerProductos=  new Router()

const productos= []

routerProductos.get('/', (req, res) => {
    
    res.json(productos)
})

routerProductos.get('/:id', (req, res) => {
    const {id} = req.params
    const productosID=productos.find(e=>e.id===id)
    res.json(productosID ? productosID: "Producto no encontrado")
})

routerProductos.post('/', (req, res) => {
    const producto=req.body
    let id
    if(productos.length==0){
      id = 1
      
    }else{
     const arrLength = productos.length-1
     const myLastProduct = productos[arrLength]
     const lastId =myLastProduct.id
     id=lastId+1
    }
   
     productos.push({...producto,id})

   
    res.json({...producto,id})
})

routerProductos.put('/:id', (req, res) => {
    const {id} = req.params
    const producto=req.body
        
    res.json({...producto,id})
})

routerProductos.delete('/:id', (req, res)=> {
    const {id} = req.params
 
    const productoEliminado=productos.filter (e=> e.id !==id)
  
   
   res.json ({id})
   
      
})



module.exports=routerProductos
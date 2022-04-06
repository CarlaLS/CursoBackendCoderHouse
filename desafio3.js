
const fs = require('fs');


class Contenedor {

    constructor (nombreArch) {
      
      
      
      this.arch=nombreArch
      let arch
      try {
         arch = fs.readFileSync(`./${nombreArch}`)  
      } 
      catch (err) {
        fs.writeFileSync(`./${this.arch}`,JSON.stringify([]))
        arch = fs.readFileSync(`./${nombreArch}`)  
      }
      
    }

     async save(producto) {
       try {

       const archivo=fs.readFileSync(`./${this.arch}`, 'UTF-8')
       const productos=JSON.parse(archivo)
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

        
        fs.writeFileSync(`./${this.arch}`,JSON.stringify(productos))
        
       }
       
        catch (err) {
          console.log ('Error de lectura')
        }
        
    }

     getById (id) {
       try{

        const archivo=fs.readFileSync(`./${this.arch}`, 'UTF-8')
        const productos=JSON.parse(archivo)
        const producto= productos.find(e=>e.id===id)
       console.log(producto? producto :  null)
      }
      catch (err) {
        console.log ('Error de lectura')
      }
     
     
      

    } 

    getAll () {
      try{

        const archivo=fs.readFileSync(`./${this.arch}`, 'UTF-8')
        const productos=JSON.parse(archivo)
        return(productos)
      }
      catch (err) {
        console.log ('Error de lectura')
      }

      
    }

    deleteById (id) {

      try {
        const archivo=fs.readFileSync(`./${this.arch}`, 'UTF-8')
        const productos=JSON.parse(archivo)
        const productosFiltrados=productos.filter(e=>e.id !==id)
      
        fs.writeFileSync(`./${this.arch}`,JSON.stringify(productosFiltrados))
      }
      catch (err) {
        console.log ('Error de lectura')
      }
      

    }

     deleteAll ( )
    {
      
        fs.writeFileSync(`./${this.arch}`,JSON.stringify([]))
      
      
    }
}


// const articulo = new Contenedor(`productos.json`)


// productosAAgregar = [                                                                                                                                                     
//   {                                                                                                                                                    
//     title: 'Escuadra',                                                                                                                                 
//     price: 123.45,                                                                                                                                     
//     thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png',                                     
                                                                                                                                         
//   },                                                                                                                                                   
//   {                                                                                                                                                    
//     title: 'Calculadora',                                                                                                                              
//     price: 234.56,                                                                                                                                     
//     thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png',                                          
                                                                                                                                         
//   },                                                                                                                                                   
//   {                                                                                                                                                    
//     title: 'Globo Terráqueo',                                                                                                                          
//     price: 345.67,                                                                                                                                     
//     thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png',                                   
                                                                                                                                          
//   }                                                                                                                                                    
// ]       
// productosAAgregar.map((prod)=>{
//   articulo.save(prod)
// });

// articulo.getById(2)
// articulo.getAll()
// articulo.deleteById(2)
// articulo.getAll()
// articulo.deleteAll()
// articulo.getById(2)


  
module.exports = Contenedor
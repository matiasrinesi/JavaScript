// Primera entrega
// Sistema de una concesionaria de autos para cargar los autos disponibles en el sistema
class Auto {
    constructor( marca = "Predeterminado", color = "Predeterminado", modelo = "Predeterminado", stock = 1) {
      this.marca = marca
      this.color = color
      this.modelo = modelo
      this.stock = stock
    }
  }
  
  function buscarAuto(autos) {
      let marcaAuto = prompt ("Ingrese una marca de auto")

      let autoBuscado = autos.find(auto => auto.marca == marcaAuto)

      if(autoBuscado == undefined) {
        console.log("Auto no encontrado")
      }else{
        console.log(autoBuscado)
      }
  }

  function buscarAutoColor(autos) {
    let colorAuto = prompt ("Ingrese un color")
    let colorBuscado = autos.filter(auto => auto.color == colorAuto)
    
    if(colorBuscado.length == 0) {
        consolelog("No hay autos de ese color")
    } else {
        console.log(colorBuscado)
    }
  }


  function ordenarAutos(autos) {
    let ordenPorStock = parseInt(prompt ("Ingrese 1 para ordenar de menor stock a mayor stock, 2 para ordenar de mayor a menor"))
   
    
    if(ordenPorStock === 1) {
        console.log(autos.sort((a,b) => a.stock-b.stock))
    } else if(ordenPorStock ===2) {
        console.log(autos.sort((a,b) => b.stock-a.stock))
    }
  }

const autos = []

let marca, color, modelo, stock, continua, respuesta
do {
    do{
     marca = prompt("Ingrese una marca de auto").toLowerCase()
     color = prompt("Ingrese el color del auto").toLowerCase()
     modelo = prompt("Ingrese el modelo del auto").toLowerCase()
    }while((marca.length == 0 || color.length == 0 || modelo.length == 0)) // .lenght para que por lo menos tenga que tener un caracter


     do {
        stock = parseInt(prompt("Ingrese un stock"))
     } while (isNaN(stock) || (stock <= 0));

     const auto = new Auto (marca, color, modelo, stock)
     autos.push(auto)
     continua = prompt("¿Desea seguir cargando autos?").toLowerCase()
} while (continua != "no");

console.log(autos)


do {
    respuesta = parseFloat( prompt(`Ingrese 1 para
    1- Buscar un auto por su marca
    2- Buscar un auto por color
    3- Ordenar de mayor a menor stock
    `))
} while (respuesta < 1 || respuesta > 3);

switch(respuesta) {
    case 1:
        buscarAuto(autos)
        break
    
    case 2:
        buscarAutoColor(autos)
         break
    
   case 3:
        ordenarAutos(autos)
        break    
        default:
            alert("opcion no valida")
}
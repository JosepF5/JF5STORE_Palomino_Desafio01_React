import mouse from '../images/productos/mouse.png'
import teclado from '../images/productos/teclado.png'
import telefono from '../images/productos/telefono.png'
import ps4 from '../images/productos/ps4.png'
import xbox from '../images/productos/xbox.png'
import nintendo from '../images/productos/nintendo_switch.png'

const productos = [
    {
        nombre: "Mouse",
        precioG: 50,
        stockG:12,
        id:1,
        img: mouse
    },
    {
        nombre: "Teclado",
        precioG: 75.5,
        stockG:35,
        id:2,
        img: teclado
    },
    {
        nombre: "Telefono",
        precioG: 400,
        stockG:14,
        id:3,
        img: telefono
    },
    {
        nombre: "PS4",
        precioG: 999,
        stockG:78,
        id:4,
        img: ps4
    },
    {
        nombre: "XBOX",
        precioG: 1250,
        stockG:45,
        id:5,
        img: xbox
    },
    {
        nombre: "Nintendo Switch",
        precioG: 486.50,
        stockG:69,
        id:6,
        img: nintendo
    }
] 
 const getFetch = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve(productos)
    },2000)
})
export default getFetch
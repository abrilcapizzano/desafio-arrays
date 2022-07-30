const destinos = []
class Destino{
    constructor (destino, dias, adultos, menores, numero, nombre){
        this.destino = destino
        this.dias = dias
        this.adultos = adultos
        this.menores = menores
        this.numero = numero
        this.nombre = nombre
    }
}
function dejeDatos(){
    const nombreUsuario = prompt('Ingrese su nombre')
    const dejeNumero = Number(prompt('Ingrese su numero de telefono para que nos contactemos con vos!'))
    const destinoElegido = prompt('Ingrese el destino que tiene interes')
    const dias = Number(prompt('Ingrese la cantidad de dias que deseas viajar'))
    const adultos = Number(prompt('Ingrese cuantos adultos van a viajar'))
    const menores = Number(prompt('Ingrese cuantos niños van a viajar'))
    const nuevoDestino = new Destino(destinoElegido, dias, adultos, menores, dejeNumero, nombreUsuario)
    destinos.push(nuevoDestino)
    alert('Gracias, en breve nos comunicaremos con usted')
}
function consultar(){
   const pregunta = confirm ('Queres dejarnos tus datos para que luego te llamemos?')
   if(pregunta){
    dejeDatos()
   }
}
consultar()






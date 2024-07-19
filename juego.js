function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
function eleccion(jugada) {
    let resultado = ""
        if(jugada == 1) {
            resultado = "piedra"
    } else if (jugada == 2) {
            resultado = "papel"
    } else if (jugada == 3) {
            resultado = "tijera"
    } else {
            resultado = "escoja bien bobo hpta"
    }
    return resultado
}
// 1 es piedra, 2 es papel, 3 es tijera
let jugador = 0    
let pc = 0
let triunfos = 0
let perdidas = 0

while (triunfos < 3 && perdidas < 3) {
    pc = aleatorio (1, 3)
    jugador = prompt("Elige: 1 para piedra, 2 para papel, 3 para tijera")
    //alert("elegiste " + jugador)
    
    alert("Tu eliges: " + eleccion(jugador))
    alert("Pc elige: " + eleccion(pc))
    //fight!
    
    if(pc == jugador) {
        alert("empate")
    } else if ((jugador == 1 && pc == 3) || (jugador == 2 && pc == 1) || (jugador == 3 && pc == 2)) {
        alert("ganaste")
        triunfos++ 
    } else {
        alert("perdiste")
        perdidas++
    }
}
alert("ganaste " + triunfos + " veces. perdiste " + perdidas + " veces.")
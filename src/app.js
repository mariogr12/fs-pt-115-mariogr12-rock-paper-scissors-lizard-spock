let opcionesJuego = ["Rock", "Paper", "Scissors", "Lizard", "Spock"]
let reglas = {
    Rock: ["Scissors", "Lizard"],
    Paper: ["Rock", "Spock"],
    Scissors: ["Paper", "Lizard"],
    Lizard: ["Paper", "Spock"],
    Spock: ["Scissors", "Rock"]
}

const eleccionAutomatica = (opciones) => {
    return opciones[Math.floor(Math.random() * opciones.length)]
}

const jugadaActual = () => {

    let eleccionUsuario = prompt("Elige una de las siguientes opciones: Rock, Paper, Scissors, Lizard o Spock")
    eleccionUsuario = eleccionUsuario.charAt(0).toUpperCase() + eleccionUsuario.slice(1).toLowerCase();

    let eleccionCpu = eleccionAutomatica(opcionesJuego)

    console.log("La cpu ha elegido: " + eleccionCpu);
    console.log("El usuario ha elegido: " + eleccionUsuario);

    if (eleccionUsuario === eleccionCpu)
        return "Empate!"
    if (reglas[eleccionUsuario].includes(eleccionCpu))
        return `Gana el usuario porque ${eleccionUsuario} gana a ${eleccionCpu}`;
    return `Gana la cpu porque ${eleccionCpu} gana a ${eleccionUsuario}`;
}

console.log(jugadaActual());

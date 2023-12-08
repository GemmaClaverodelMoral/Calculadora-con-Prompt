function agregarContenido(mensaje) {
    var parrafo = document.createElement("p");
    parrafo.innerHTML = mensaje;
    document.body.appendChild(parrafo);
};


const sumar = (num1,num2) => {
    return num1 + num2;
}
const restar = (num1,num2) => {
    return num1 - num2;
}
const multiplicar = (num1,num2) => {
    return num1 * num2;
}
const dividir = (num1,num2) => {
    return num1 / num2;
}

let operacion = prompt("Operacion a efectuar?   S: Sumar  R: Restar  M: Multiplicar  D: Dividir").toUpperCase();
let resultado = "";
if (operacion !== "S" && operacion !== "R" && operacion !== "M" && operacion !== "D") {
    resultado = `Chino... pon una operacion valida!, pusiste ${operacion}`;
} else { 

    let operando1 = parseInt(prompt("1er Operando: "));
    let operando2 = parseInt(prompt("2do operando; "));

    if (operacion == "S") {
        resultado = sumar(operando1,operando2);
    } else if (operacion == "R") {
        resultado = restar(operando1,operando2);
    } else if (operacion == "M") {
        resultado = multiplicar(operando1,operando2);
    } else if (operacion == "D") {
        resultado = dividir(operando1,operando2); 
    } 
};

agregarContenido(resultado);
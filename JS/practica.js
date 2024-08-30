function calcularAreaCirculo(radio) {
    const pi = Math.PI; 
    const area = pi * (radio ** 2); 
    return area; 
}
const radio = 3; 
const area = calcularAreaCirculo(radio); 

console.log("El área del círculo es " + area);
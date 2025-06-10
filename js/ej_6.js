const numero1 = parseInt(prompt("Ingrese el primer número"))
const numero2 = parseInt(prompt("Ingrese el segundo número"))
if(numero1>numero2){
    document.writeln("El "+ numero1 + " es el mas grande")
}else if(numero2>numero1){
    document.writeln("El "+ numero2 + " es el mas grande")
}else {
     document.writeln("Los números son iguales")
}
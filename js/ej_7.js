//Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
const numero1 = parseInt(prompt("Ingrese el primer número"))
const numero2 = parseInt(prompt("Ingrese el segundo número"))
const numero3 = parseInt(prompt("Ingrese el tercer número"))
if(numero1>numero2){
    if(numero1>numero3){
        document.writeln("El "+ numero1 + " es el mas grande")
    }else{
        document.writeln("El "+ numero3 + " es el mas grande")
    }
    
}else if(numero2>numero3){
    document.writeln("El "+ numero2 + " es el mas grande")
}else if(numero3>numero1){

     document.writeln("El "+ numero3 + " es el mas grande")
}else{
    document.writeln("Los numeros son iguales")
}
/* Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)
Ejemplo: 
input: 20
Output: El 20 es divisible por 2.
*/

const numero = parseInt(prompt("Ingrese un número"))

if(numero>=0)
{
    if(numero%2 === 0 || numero%3 === 0 || numero%5 === 0 || numero%7 === 0){

         if(numero%2 === 0){
            document.writeln("El numero es divisible por 2")
        }
        if(numero%3 === 0){
            document.writeln("El numero es divisible por 3")
        }
        if(numero%5 === 0){
            document.writeln("El numero es divisible por 5")
        }
        if(numero%7 === 0){
            document.writeln("El numero es divisible por 7")
        }
    }else{
        document.writeln("El numero ingresado NO es divisible por 2, 3, 5 ni 7")
    }
}else{
    document.writeln("El numero ingresado no es valido")
}
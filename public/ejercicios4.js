function parOImpar(num) {
    if (num%2 == 0) {
        alert('par');
    } else {
        alert('impar');
    }
}

function mayOMin(cadena) {

    var resultado = "La cadena \""+cadena+"\" ";
  
    // Comprobar mayúsculas y minúsculas
    if(cadena == cadena.toUpperCase()) {
      resultado += " está formada sólo por mayúsculas";
    }
    else if(cadena == cadena.toLowerCase()) {
      resultado += " está formada sólo por minúsculas";
    }
    else {
      resultado += " está formada por mayúsculas y minúsculas";
    }
  
    return resultado;
}
function isPalindromo(cadena) {
    if (cadena == cadena.split("").reverse().join("")) {
        return true
    } else {
        return false       
    }
}
// alert(isPalindromo("ANITALAVALATINA"))
// mayOMin("aaaa")
// parOImpar(13)
function desafio03(cadena)
{
    const arrPalabras = cadena.split(" ");

    for(let i=0;i < arrPalabras.length; i++){
        arrPalabras[i] = arrPalabras[i].charAt(0).toUpperCase() + arrPalabras[i].slice(1);
    }
    
    return arrPalabras.join(" ");
}
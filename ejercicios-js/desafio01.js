function desafio01()
{
    const suma = 0;

    for(let i=10; i<=50; i++){

        if(i % 2 == 0)
            suma+=i; 
    }
    console.log(suma);
    return suma;

}
// crbug/1173575, non-JS module files deprecated
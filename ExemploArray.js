let numeros = [8,9,12,32,33,44,65,75,11,10];

for (let i = 0; i < numeros.length; i++){
    let num = numeros[i];

    if(num % 2 === 0){
        console.log('O número',num,'é par')
    }
    else{
        console.log('O número',num,'é impar')
    }
}

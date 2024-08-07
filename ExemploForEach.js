let numbers = [1,2,3,4,5,6,7,8,9,10,100,99,75,86,12];

// Estrutura de repetição usando forEach

numbers.forEach(num => {
    if (num % 2 === 0){
        console.log("O numero",num,"é par");
    }else{
        console.log("O numero",num,"é impar");
    }
    
});
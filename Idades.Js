const idade = -12
if(idade < 0){
    console.log('Numero errado')
}
else{
    if(idade < 13){
        console.log('E criança')
    }
    else{
        if(idade < 18){
            console.log('E adolescente')
        }
        else{
            if(idade < 65){
                console.log('E adulto')
            }
            else{
                console.log('E idoso')
            }
        }
    }
}

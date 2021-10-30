
function dot_product(v1, v2){
    let ps = 0;
    for(i = 0; i < 2;  i++){
        ps += v1[i] + v2[i];
    }
    return ps;
    
}

function checkIfOrthogonal(v1, v2){
    let value = dot_product(v1, v2)
    if (value === 0){
        console.log('Vectors are Orthogonal')
    }else{
        'Dot product is: ' + value
    }
}
 

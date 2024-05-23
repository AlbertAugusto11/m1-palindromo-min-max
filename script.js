function isPalindrome(str){
    str = str.toLowerCase();
    str = str.replace(/\s/g, '');
    let result1 = "";
    let result2 = "";
    for(let i=0;i<str.length;i++){
        result1 += str[i];
    }
    for(let i=str.length-1;i>=0;i--){
        result2 += str[i];
    }
    if(result1 == result2){
        return true;
    }else{
        return false;
    }
}
// Só Precisava usar o for para ler de tras para frente e veficicar se é igual a "str"

function arrayMaxMin(arr){
    let min = 0;
    let max = 0;
    let result = [];
    for(let i=0;i<arr.length;i++){
        if(arr[i] == Math.min(...arr)){
            min += arr[i];
        }
        if(arr[i] == Math.max(...arr)){
            max += arr[i];
        }
    }
    result = [min,max];
    return result;
}
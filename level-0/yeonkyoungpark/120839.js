let rsp = String(205);

let temp = rsp.split('');
console.log(temp);
let tempArry = [];
for(let  i = 0; i<rsp.length; i++){
    if(rsp[i]==2){
        tempArry.push(0);
    
    }else if(rsp[i]==0){
        tempArry.push(5);
    }else{
        tempArry.push(2);
    }
}
return tempArry.join('');
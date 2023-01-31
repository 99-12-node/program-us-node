let emergency = [3, 76, 24];
let result = [];



let temp = emergency.map(x=>x);
let star = emergency.sort((a,b)=>b-a);
for(let i = 0; i<star.length; i++){
    result.push(star.indexOf(temp[i])+1);
}
console.log(result);
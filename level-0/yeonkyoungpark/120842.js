let num_list = [1,2,3,4,5,6,7,8];
let n = 2;
let result = [];

for(let i =0; i<num_list.length/n; i++){ //3 // 0 // 1
    result = [...result,num_list.slice(i*n,i*n+n)]; //  0, 3 // 3, 6 
}
console.log(result);
console.log(num_list);
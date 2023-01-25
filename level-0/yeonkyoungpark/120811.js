
function solution(array){
    let mid_num = (Math.floor(array.length/2));
    const asc_array = array.sort((a,b)=>a-b);

    return asc_array[mid_num]; 
}
function solution(num_list, n) {
    let array = [];
    
    for (let i=0; i<num_list.length/n; i++) {
        array.push(num_list.slice(n*i,n*i+n));
    }
    return array;
}
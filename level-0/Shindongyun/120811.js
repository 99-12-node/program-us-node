function solution(array) {
    function compare(a,b) {
        return a - b; 
    }

    let steps = array.sort(compare);
    console.log(steps);
    
    let num = ((steps.length/2) -0.5)
    return (array[num]);
}

// function solution(array) {

// let steps = array.sort((a, b) => a - b)
// let num = parseInt(steps.length/2)
// return (array[num]);
// }

// function solution(array) {
// return array.sort((a,b) => a - b)[parseInt(array.length/2)];;
// }
    



// ex) 1, 11, 2, 234, 3, 4, 5
function solution(my_string) {
    let answer = '';
    let mo = 'aeiou'
    let cut = my_string.split('').filter((a)=>(!mo.includes(a))).join('')
    return cut;
}
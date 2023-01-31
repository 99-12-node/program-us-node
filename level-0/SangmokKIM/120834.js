function solution(age) {
    let g = age.toString().split('').map(a => "abcdefghij"[a]).join('')
    return g
}
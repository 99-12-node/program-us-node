function solution(my_string, n) {
    let a = ''
    let b = ''
    let c = ''
    for(let i = 0; i < my_string.length; i ++){
        a = my_string[i]
        b = a.repeat(n)
        c += b
    }
    return c
}
function solution(my_string) {
    let splitstr = my_string.split("")
    let reversestr = splitstr.reverse()
    let joinstr = reversestr.join("")
    return joinstr;
}
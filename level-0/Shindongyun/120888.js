function solution(my_string) {
    let str = [...new Set(my_string.split(''))];
    console.log(str);
    // for (let i=0; i<str.length; i++) {
    //     if (str[i])
    return str.join('');
}
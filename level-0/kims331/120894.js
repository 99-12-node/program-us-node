function solution(numbers) {
    let answer = 0;
    let num = ['zero','one','two','three','four','five','six','seven','eight','nine']
    for(let i = 0; i < num.length; i++){
        numbers=numbers.split(num[i]).join(i)
    } //자른부분을 다시 합쳐야함
    //문자열 -> 숫자열 변환?
    //영어 소문자 zero=0, one=1,two=2...nine=9
    return Number(numbers);
}
function solution(my_string) {

    return my_string.replace(/[^0-9]/g, '')
                    .split('')
                    .reduce((a, b) => +a + +b, 0);
}

// 문자열을 나눈다, 자연수만 반복문으로 뽑는다, 더한다
// 각 자리를 숫자형으로 바꾸고 NaN이 나오면 못더하게는 어떨까
const solution = (my_string, n) => [...my_string].map(a => a.repeat(n)).join("")
//각 문자를 split, 각문자*3, join return
//split 대신 스프레드 문법 사용해보기
//for문 대신 map사용으로 배열 반복 처리 하기
//각문자열 *n은 repeat 사용
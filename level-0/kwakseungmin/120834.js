age = 234 
function solution(age) {
    str = 'abcdefghij'// 변수 생성, 값은 문자열
    console.log( String(age) // age 를 문자열로 전환
      .split("") // 그리고 배열로 전환['2','3','4'] 
      .map((x) => str[x])//그리고 mapping['c','d','e']
      .join()// 그리고 문자열로 전환 'cde'
      )    
  }
solution(age)
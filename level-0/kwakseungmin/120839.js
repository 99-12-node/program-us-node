function solution(rsp) {
    c = {
      0: 5,
      2: 0,
      5: 2
  }
  return rsp.split('').map(x => c[x]).join('')
  //배열 전환 후 0 -> 5 , 2 -> 0, 5 -> 2 짝짓기
  // 객체의 성질을 map 에 이용, x 를 key 의 value (c[x])
  // 로 전환후 새 배열로 생성 후 join 으로 string 변환
}
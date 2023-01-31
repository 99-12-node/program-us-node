function solution(array){
    //중앙값 -> 배열의 중앙의 값 -> 배열길이 /2
let answer = []
let mid_num = Math.floor(array.length / 2);

  // 오름차순으로 정렬하기 - sort() 메서드 사용
let a_array = array.sort((a, b) => a - b);

  // 오름차순된 새로운 배열 중 중간 index 반환하기
  return a_array[mid_num];
}

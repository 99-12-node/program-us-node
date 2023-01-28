// solution: 
// 1. 앞에서부터 차례대로 원소를 확인하여 갯수를 센다.
// 2. 최빈값을 그때그때 기록한다.

function solution(array) {
	// 오름차순으로 배열을 정렬
	let sortedArray = array.sort((a, b) => a-b);

	let count = 0; // 배열 전체를 돌기 위한 인덱스

	let beforeNumber = -1; // 지금 숫자 바로 전에 나온 숫자
	let repeactCount = 0; // 해당 숫자의 빈도수(반복횟수)
    
	let modNumber = -1; // 최빈값 숫자 (원소 범위를 참고하여 초기값은 -1) >> result
	let modCount = 0; // 최빈값 빈도수

	let isDuplicateMod = false;

	while (count < array.length) {
		// 맨 앞부터 차례대로 빈도수를 계산
		if (beforeNumber !== array[count]) {
			repeactCount = 1;
		} else {
			repeactCount += 1;
		}

		// 최빈값 여러개 찾기 - 해당 숫자 빈도수가 최빈값의 빈도수와 같고 원소가 최빈값 숫자가 아닌 경우
		if (repeactCount === modCount && array[count] !== modNumber) {
			isDuplicateMod = true;
		}

		// 해당 숫자의 빈도수가 최빈값의 빈도수과 같은지 매번 세어보기
		if (repeactCount > modCount) {
			modNumber = array[count];
			modCount = repeactCount;
			isDuplicateMod = false;
		}

		beforeNumber = array[count]; // 배열 전체를 원소 하나씩 이동
		count += 1; // 배열의 인덱스 증가
	}

    // 중복된 최빈값이 있는 경우
	if (isDuplicateMod) {
		return -1
	}

	return modNumber;

}
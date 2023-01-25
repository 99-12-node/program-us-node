// 못풀었습니다ㅠㅠㅠㅠㅠㅠㅠㅠㅠ

function solution(array) {
    let arr = array.sort((a,b) => a-b)
   
    let lotNum = -1;        // 최빈값
    let lotNumRepeatI = 0;  // 최빈값이 될때 몇번 반복했는지
    let repeatI = 0;        // 현재 똑같은 숫자가 몇 번 등장했는지
    let beforeNum = -1;      // 지금 보고있는 숫자 이전 숫자
    let same = false;
    for (let i=0; i<arr.length; i++) {
     
        if (beforeNum !== arr[i]) {
            repeatI = 1;
        } else {
            repeatI = repeatI + 1;
        }
        
        if (repeatI === lotNumRepeatI) {
            if(lotNum !== arr[i])
                same = true;
        }
        
        if (repeatI > lotNumRepeatI) {
            lotNum = arr[i];
            lotNumRepeatI = repeatI;
            same = false;
        }
        beforeNum = arr[i];
    }
    if(same) return -1;
    return lotNum;
}

//1. 앞에서부터 차례대로 원소를 확인하며 갯수를 센다.
//2. 최빈값을 그때그때 기록한다.

    // console.log(arr);
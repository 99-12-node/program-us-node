function solution(num_list) {
    let evenCount = 0;
    let oddCount = 0;
    
    let i = 0;
    
    while (i < num_list.length) {
        // 짝수 개수
        if (num_list[i] % 2 === 0) {
            evenCount += 1;
        } else { // 홀수 개수
            oddCount += 1;
        }
        i++;
    }
    return [evenCount, oddCount];
}
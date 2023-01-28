function solution(n, k) {
    /**
    10인분 => 음료수 1개 공짜 (-2000)
    1인분: 12000, 음료수 1개 : 2000
    */ 
    const ONESERVING = 12000;
    const ONEDRINK = 2000;
    
    // 10인분을 얼마나 먹었는지 확인: 10으로 나눈 몫 * 음료수 1개
    let discoutDrinkCount = parseInt(n / 10);
    
    // 위에서 구한 음료수 개수 차감
    k = k - discoutDrinkCount;
    
    // 전체 금액 = 양꼬치 개수 * 12000 + 최종 음료수 개수 * 2000
    let answer = n * ONESERVING + k * ONEDRINK;
    
    return answer;
}
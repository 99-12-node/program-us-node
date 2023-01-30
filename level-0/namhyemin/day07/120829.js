function solution(angle) {
    
    const ZERO = 0;
    const NINETY = 90;
    const ONEHUNDREDEIGHY = 180;
    
    if (angle === ONEHUNDREDEIGHY) {
        return 4;
    } else if (angle > NINETY) {
        return 3;
    } else if (angle === NINETY) {
        return 2;
    } else {
        return 1;
    }
}
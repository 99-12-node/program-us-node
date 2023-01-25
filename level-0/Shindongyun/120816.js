function solution(slice, n) {
    for (i = 1; i < 100; i++) {
        if (slice * i >= n) {
            return i;
        }
    }
}

//이것도 100을 바꿔줄 방법을 찾아보자
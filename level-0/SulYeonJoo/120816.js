function solution(slice, n) {
    for (i = 1; i < 100; i++) {
        if (slice * i >= n) {
            return i;
        }
    }
}

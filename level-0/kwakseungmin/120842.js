num_list = [1, 2, 3, 4, 5, 6, 7, 8]
n = 4

function solution(num_list, n) {
    ans = []
    leng = num_list.length

    for(let i = 0; i< leng / n; i++){
        temp = num_list.splice(0, n)
        ans.push(temp)
        }
        console.log(ans)
}
solution(num_list, n)

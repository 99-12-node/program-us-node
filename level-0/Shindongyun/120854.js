function solution(strlist) {
    // console.log(strlist[4].length)  // 배열의 각 인덱스의 길이를 나타낼 수 있는지 확인
    let arr = [];
    
    for (let i=0; i < strlist.length; i++) {  //i의 길이를 =으로했더니 undifined가 나온것 같다.
        let long = strlist[i].length;
        
        arr.push(long);
    } return arr;
}
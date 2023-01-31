//db에 저장되어있는 정보와 id_pw정보와 일치하는지
    //db배열안 인덱스값에서 또 id_pw정보의 인덱스값과 일치하는 지 비교
    //id_pw 둘다 일치하면 login
    //둘중 하나만 일치하면 일치하지 않는 정보를 wrong 불일치 정보 반환
    //둘다 일치하지 않으면 fail
    function solution(id_pw, db) {
        for(let i = 0; i < db.length; i++){
            if(id_pw[0] === db[i][0]){
                if(id_pw[1] === db[i][1]) 
                return "login";
                return "wrong pw";
                break;
            }
        }
        return "fail";
    }
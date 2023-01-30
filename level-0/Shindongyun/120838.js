function solution(letter) {
    let answer = '';
    let spelling = letter.split(' ');
    let morse = { 
    '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
    '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
    '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
    '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
    '-.--':'y','--..':'z', 'test':'ts'
    }
    console.log(spelling);
    console.log(morse['test']);
    //ts
    console.log(morse['ts']);
    //undefined

    return spelling.map((inner) => morse[inner]).join('');
}

//morse에 몇번째 인덱스인지 찾는다
//문자의 인덱스값을 가져온다.

// : 는 단방향
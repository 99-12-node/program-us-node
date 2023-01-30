letter = ".... . .-.. .-.. ---"
function solution(letter) {
    
    morse = { 
        '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
        '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
        '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
        '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
        '-.--':'y','--..':'z'
    }
//     a = letter.split(' ') //공백 기준 스플릿 -> 배열
//     c = morse
//     for (let value in c){
//     for(let i = 0; i< a.length; i++){
//         d += a[i]
    
//        if (d == value)
//        {
//             d = c[value]
            
//        }
//     }
//     return d
//     // b = a.map(x => morse[x])
//     }
// }
return letter
        .split(' ')
        .map(x => morse[x])
        .join('')
}
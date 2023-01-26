function solution(num_list) {

    let liketwo = 0;
    let another = 0;
    
    for (let i=0; i<num_list.length; i++){
        if (num_list[i]%2===0){
            liketwo = liketwo+1
        } else{
            another = another+1
        }
    }

    // let liketwo = 0;
    // let another = 0;
    // let i = 0
    
    // while(i<num_list.length){
    //     if (num_list[i]%2===0){
    //         liketwo = liketwo +1;
    //     } else {
    //         another = another +1
    //     }
    //     i = i+1
    // }
    return [liketwo,another];
}
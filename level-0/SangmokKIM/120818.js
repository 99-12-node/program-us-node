function solution(price) {
    if(price<100000) return parseInt(price);
    else if (100000<=price&& price<300000) return parseInt(price-(price*0.05));
    else if (300000<=price&& price<500000) return parseInt(price-(price*0.1));
    else if (500000<=price) return parseInt(price-(price*0.2));
}
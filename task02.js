'use strict';

const getRandom2 = (l,n,m) =>{ 
    let arr = []; 
    for(i=0; i<l; i++){ 
    if(n<m) 
       arr.push(Math.floor(Math.random() * (m-n+1)) + n) 
       else 
        arr.push(Math.floor(Math.random() * (n-m+1)) + m) 
         } 
    return arr; 
    } 
    

console.log(getRandom2(9));
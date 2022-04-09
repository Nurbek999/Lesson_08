'use strict';

const getRandom = (l) =>{ 
    let arr = []; 
    for(i=0; i<l; i++){ 
      arr.push(Math.floor(Math.random() * 101)); 
    } 
    return arr; 
    } 
    

console.log(getRandom(5));
'use strict';

const getRandom3 = (l,n,m, str) =>{ 
    let arr = []; 
    for(i=0; i<l; i++){ 
    if(n<m) 
       arr.push(Math.floor(Math.random() * (m-n+1)) + n) 
       else 
       arr.push(Math.floor(Math.random() * (n-m+1)) + m) 
         } 
         console.log(`Рандомный массив: ${arr}`) 
         if(str === 'even'){ 
         let result = arr.filter(elem => elem % 2 == 0) 
         return result; 
         } 
         if (str === 'odd'){ 
         let result = arr.filter(elem => elem % 2 != 0) 
         return result; 
         } 
    } 
    
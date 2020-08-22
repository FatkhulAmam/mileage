const hasil = require('./src/function.js') 

console.log("jarak yang ditempuh: "+hasil.hitungJarak ("10:12:21","12:00:00",6)+" m");

console.log("jarak yang ditempuh: "+hasil.hitungJarak ("10:12:21","12:00:00",6)/1000+" km");
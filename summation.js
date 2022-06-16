// Buvo atliktas for loop, kuris prasidejo nuo vieneto, nes iterator priskirtas vienetui. Loop vyko iki kol buvo pasiektas lygiavertis skaicius duotam num argumentui. 

var summation = function (num) {
    let sum = 0;
    for(let i = 1; i <= num; i++){
      sum += i;
    }
    return sum;
  }
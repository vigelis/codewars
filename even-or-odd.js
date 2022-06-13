// tiesiog pritaikytas modulus operatorius norint apskaičiuoti liekaną, jei liekana yra 0, tuomet
// skaičius duotas argumente yra lyginis, jei ne- tuomet nelyginis.

function even_or_odd(number) {
    return number % 2 ? "Odd" : "Even"
  }
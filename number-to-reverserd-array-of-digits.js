// Gaunamas paprastas skaičius kaip funkcijos argumentas, tuomet tą skaičių paverčiame į string,
// nes kitaip neveiks spit() funkcija, po to su reverse apkeičiame gauto array iš string elementų
// eilės tvarką ir string elementus paverčiame į skaičius. map(Number) funkcija veikia, nes ji
// kiekvieną array elementą po vieną paverčia į skaičių dėl nurodyto argumento "Number".

function digitize(n) {
    return n.toString().split('').reverse().map(Number);
  }
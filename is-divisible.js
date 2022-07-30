// Pagal sąlygą, turime patikrinti ar skaičius n dalinasi ir iš skaičius x, bei y. Jei taip,
// tada sąlyga yra teisinga. Tam pasiekti, mes patikriname ar gauti rezultatai yra sveikieji
// skaičiai su funkcija isInteger, jei rezultatas yra gautasis skaičius, ši funkcija mums
// grąžins verte - true. Toliau pritaikoma if sąlyga, kuri grąžina true jei abu skaičiai yra
// sveikieji.

function isDivisible(n, x, y) {
    let answerOne = Number.isInteger(n/x)
    let answerTwo = Number.isInteger(n/y)
        
    if(answerOne === true && answerTwo === true){
      return true
    } else {
      return false
    }
  }
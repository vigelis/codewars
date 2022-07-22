// My Solution

// Firstly I created a variable with value = 0. Then I mapped through array elements and inside
// this method wrote if-else condition where I added +1 to variable called 'sum' when array element is 
// equal to boolean 'true'. As a result I got an answer of how much array elements with value equal to 
// 'true' was there.

function countSheeps(arrayOfSheep) {
    let sum = 0;
    arrayOfSheep.map(sheep => {
      if(sheep === true){
        return sum += 1
      }
    })
    return sum
  }

// Others' solution

// Boolean yra funkcija, kuri leidžia patikrinti ar array elementas, kuris yra boolean yra 
// true ar false, kadangi automatiškai, jei atsakymas yra true, tas atsakymas yra grąžinamas
// todėl galiausiai susidaro array vien iš elementų su true verte. Tuomet .length nustato
// array ilgį ir gauname atsakymą.

  function countSheeps(arrayOfSheeps) {
    return arrayOfSheeps.filter(Boolean).length;
  }
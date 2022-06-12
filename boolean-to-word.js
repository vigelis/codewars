// Pritaikyta labai paprasta if...else sąlyga.

function boolToWord( bool ){
    if(bool === true){
      return "Yes"
    } else{
      return "No"
    }
  }

// Arba sutrumpina versija su arrow funkcija:

let boolToWord = bool => bool === true ? "Yes" : "No";
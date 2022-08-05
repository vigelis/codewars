// Užduotis buvo - vardą ir pavardę paversti į inicialus iš didžiųjų raidžių. Taigi,
// pirmiausia paprastą string per tarpą atskiriame į du atskirus array elementus su split funkcija
// tuomet pasirenkame array elementų pirmąsias raides ir jas paverčiame į didžiąsias su 
// toUpperCase metodu. Galiausiai rezultatą grąžiname ir gauname atsakymą.

function abbrevName(name){

    let arr = name.split(' ')
    let firstLetter = arr[0][0]
    let lastLetter = arr[1][0]
    let nameInitials = `${firstLetter}.${lastLetter}`.toUpperCase()
    return nameInitials
    }
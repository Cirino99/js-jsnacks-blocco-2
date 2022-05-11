/*
    genera un array di 10 numeri casuali range 1- 100, ma stavolta senza doppioni
*/
const myArray = [];
const myList = document.getElementById('list-array');
for(let i=0; i<10; i++){
    const myLi = document.createElement('li');
    let numberRandom;
    let differentNumber;
    do{
        differentNumber = false;
        numberRandom = Math.floor(Math.random() * 100 + 1);
        console.log(`iterazione ${i}:`,`numero random generato: ${numberRandom}`);
        for(let j=0; j<myArray.length; j++){
            if(numberRandom===myArray[j]){
                differentNumber = true;
            }
        }
    }while(differentNumber);
    myArray.push(numberRandom);
    myLi.append(numberRandom);
    myList.append(myLi);
}
console.log(myArray);

// Versione prof
const myArray2 = [];
while(myArray2.length<10){
    let numberRandom = Math.floor(Math.random() * 100 + 1);
    if(!myArray2.includes(numberRandom)){
        myArray2.push(numberRandom);
    }
}
console.log(myArray2);
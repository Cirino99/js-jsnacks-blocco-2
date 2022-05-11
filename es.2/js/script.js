const myArray = [];
let max=0;
do{
    let numberUser = parseInt(prompt('Inserisci un numero'));
    myArray.push(numberUser);
    max+=numberUser;
}while(max<50);
console.log(myArray);
console.log(max);
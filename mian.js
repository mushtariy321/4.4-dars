// let num = +prompt('son kiriting!')

// if (num % 2 == 0) {
//     console.log(`even`);
// }
// else{
//     console.log(`odd`);
// }

// if (num % 4 == 0) {
//     console.log(`kabisa yili`);
// }
// else{
//     console.log(`kabisa yili emas`);
// }


// let meva = prompt(`meva nomi`)

//  if(meva == 'olma') {
//     console.log(`10.000`)
// }

// else if (meva == 'nok'){
//     console.log(`12.000`);
// }

// else if (meva == 'tarvuz') {
//     console.log(`15.000`);
// }
// else{
//     console.log(`bunday meva yo'q`)
// }


let number = (Math.floor(Math.random() * 100))
alert(`Random son: ${number}`)

if (number % 3 === 0) {
    alert(Fizz)
}

else if (number % 5 === 0) {
    alert(`Buzz`)
}
else if (number % 3 && number % 5){
    alert (`FizzBuzz`)
}

else {
    alert(`Fizz ham emas Buzz ham emas:)`)
}
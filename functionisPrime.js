function isPrime(num) {
    // for (let i = 2; i < num; i++) {
    //     if (num % i == 0) return false;
    // }
    // return true;

    let i = 2;
    while (i < num) {

        if (num % i == 0) return num + " " + "Not Prime Number";
        i++;
    }

    return num + " " + "Prime Number";

}
console.log(isPrime(2));  // true
console.log(isPrime(5)); // true
console.log(isPrime(4));  // false
console.log(isPrime(17)); // true
console.log(isPrime(20)); // false
function google(number) {
    if (number % 5 == 0 && number % 3 == 0) {
        console.log("google");
    } else if (number % 3 == 0) {
        console.log("goo");
    } else if (number % 5 == 0) {
        console.log("gle");
    } else {
        console.log(number);
    }
}

google(3); // Returns
google(5); // Returns
google(15); // Returns
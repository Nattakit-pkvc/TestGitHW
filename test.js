function google(a) {
    if (a % 5 == 0 && a % 3 == 0) {
        console.log("google");
    } else if (a % 3 == 0) {
        console.log("goo");
    } else if (a % 5 == 0) {
        console.log("gle");
    } else {
        console.log(a);
    }
}

google(3); // Returns
google(5); // Returns
google(15); // Returns
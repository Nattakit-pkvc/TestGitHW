function loadData(complete, error) {
    console.log("Loading data...");
    Math.random() >= 0.5 ? complete() : error();
}

let succsess = function() {
    console.log("Success");
}

let failure = function() {
    console.log("Failed");
}

loadData(succsess, failure);
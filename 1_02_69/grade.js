let arr = [100, 89, 73, 45, 67];

function grader(scores) {
    let grade = { A: 0, B: 0, C: 0, F: 0 };
    let sum_score = 0;
    let avg = 0;
    for (score of scores) {
        if (score >= 80) {
            let a_count = grade['A'];
            let new_a = a_count + 1;
            grade['A'] = new_a;
            // grade.A++;
            sum_score += score;

        } else if (score >= 70) {
            let b_count = grade['B'];
            let new_b = b_count + 1;
            grade['B'] = new_b;
            // grade.B++;
            sum_score += score;

        } else if (score >= 50) {
            let c_count = grade['C'];
            let new_c = c_count + 1;
            grade['C'] = new_c;
            // grade.C++;
            sum_score += score;

        } else {
            let f_count = grade['F'];
            let new_f = f_count + 1;
            grade['F'] = new_f;
            // grade.F++;
            sum_score += score;

        }
    }
    avg = sum_score / arr.length;

    console.log("Input array is" +" "+ arr);
    console.log("Grade A: " + grade.A);
    console.log("Grade B: " + grade.B);
    console.log("Grade C: " + grade.C);
    console.log("Grade F: " + grade.F);


    console.log("Sum score: " + sum_score);
    console.log("Average score: " + avg);

}

grader(arr);

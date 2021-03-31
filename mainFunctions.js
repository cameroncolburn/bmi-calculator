// event listener for calculate button
var calculateButton = document.getElementById('get-results');
calculateButton.addEventListener('click', calculateBmi);

// BMI calculation function
function calculateBmi() {
    var a = Number(document.getElementById('feet').value);
    var b = Number(document.getElementById('inches').value);
    var c = Number(document.getElementById('pounds').value);
    // height in inches
    var d = (a * 12) + b;
    // calculate BMI
    bmi = [c / (d**2)] * 703;

    //display results to the user
    var results = document.getElementById('results-pg');
    if (bmi < 18.5) {
        results.innerHTML = "Your BMI is " + "<strong><em>" + bmi.toFixed(1) + "</em></strong>" +  ". According to the CDC, your BMI is considered <strong><em>underweight</em></strong>."
    } else if (bmi > 18.5 && bmi < 24.9) {
        results.innerHTML = "Your BMI is " + "<strong><em>" + bmi.toFixed(1) + "</em></strong>" + ". Accoding to the CDC, your BMI is considered <strong><em>normal</em></strong>."
    } else if (bmi > 24.9 && bmi < 29.9) {
        results.innerHTML = "Your BMI is " + "<strong><em>" + bmi.toFixed(1) + "</em></strong>" + ". Accoding to the CDC, your BMI is considered <strong><em>overweight</em></strong>."
    } else {
        results.innerHTML = "Your BMI is " + "<strong><em>" + bmi.toFixed(1) + "</em></strong>" + ". Accoding to the CDC, your BMI is considered <strong><em>obese</em></strong>."
    }

}

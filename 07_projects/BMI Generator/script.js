const form = document.querySelector('form')
form.addEventListener('submit', function(e){
    e.preventDefault();
    const weight = parseFloat(document.getElementById("weight").value);
    const heightCm = parseFloat(document.getElementById("height").value);
    const result = document.querySelector('#result')
    console.log(weight) ; 
    console.log(heightCm)
    const heightM = heightCm / 100;
    const bmi = (weight / (heightM * heightM)).toFixed(2);

    let category = "";

    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
        category = "Overweight";
    } else {
        category = "Obese";
    }
    result.innerHTML = `<span>${bmi}</span>` ; 
})
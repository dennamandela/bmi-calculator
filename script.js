    const btn = document.querySelector("#btn");

    btn.addEventListener("click", calculate);

    function calculate() {
        let weight = parseInt(document.querySelector("#weight").value);
        let height = parseInt(document.querySelector("#height").value);
        let result = document.querySelector("#result");
        result.innerHTML = " ";

        let bmi = weight / (height/100) ** 2;
        bmi = bmi.toFixed(1);

        let description;

        if (bmi >= 30) {
            description = 'Obesity';
        } else if (bmi >= 25 && bmi <= 29.9) {
            description = 'Overweight';
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            description = 'Normal weight';
        } else {
            description = 'Underweight';
        }

        const response = `Your BMI is <strong>${bmi}</strong> which means You are <strong>${description}</strong>`;
        result.innerHTML = response;
    }
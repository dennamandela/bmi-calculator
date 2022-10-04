    let weight, height, bmi

    function calculate() {
        weight = document.getElementById("weight").value;
        height = document.getElementById("height").value;
        bmi = document.getElementById("bmi");
        bmi.innerHTML = "";

        // weight.parseInt(weight);
        // height.parseInt(height);

        bmi = weight / (height/100) ** 2
        bmi = bmi.toFixed(1)

        let description

        if (bmi <= 18.5) {
            description = 'Underweight';
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            description = 'Normal weight';
        } else if (bmi >= 25 && bmi <= 29.9) {
            description = 'Overweight';
        } else {
            description = 'Obesity';
        }

        const response = `Your BMI is <strong>${bmi}</strong> which means You are <strong>${description}</strong>`;
        bmi.innerHTML = response;

    }
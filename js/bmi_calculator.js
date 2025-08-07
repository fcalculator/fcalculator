function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    if (weight > 0 && height > 0) {
        const bmi = (weight / (height * height)).toFixed(2);
        let category = bmi < 18.5 ? 'Underweight' : bmi < 25 ? 'Normal' : bmi < 30 ? 'Overweight' : 'Obese';
        document.getElementById('bmiResult').innerText = `BMI: ${bmi} (${category})`;
    } else {
        document.getElementById('bmiResult').innerText = 'Invalid input';
    }
}

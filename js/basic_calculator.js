function calculateBasic() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const op = document.getElementById('operation').value;
    let res;
    if (op === 'add') res = num1 + num2;
    else if (op === 'subtract') res = num1 - num2;
    else if (op === 'multiply') res = num1 * num2;
    else if (op === 'divide') res = num2 !== 0 ? num1 / num2 : 'Error: Division by zero';
    document.getElementById('result').innerText = `Result: ${res}`;
}

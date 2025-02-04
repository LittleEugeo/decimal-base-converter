document.addEventListener('DOMContentLoaded', () => {
    const numberToConvert = document.getElementById('input-number');
    const btnDelete = document.getElementById('btn-delete');
    const btnCalculate = document.getElementById('btn-calculate');
    const resulBinary = document.getElementById('resul-binary');
    const resulOctal = document.getElementById('resul-octal');
    const resulHexadecimal = document.getElementById('resul-hexadecimal');

    const clearValues = () => {
        numberToConvert.value = '';
        resulBinary.textContent = '0';
        resulOctal.textContent = '0';
        resulHexadecimal.textContent = '0';
    }

    const convertToBinary = (n) => {
        const array = [];
        let residuo = 0;
        while (n > 0) {
            residuo = n % 2;
            array.push(residuo);
            n = Math.floor(n / 2);
        }
        const binaryValue = array.reverse().join('');
        resulBinary.textContent = binaryValue;
    }

    const convertToOctal = (n) => {
        const array = [];
        let residuo = 0;
        while (n > 0) {
            residuo = n % 8;
            array.push(residuo);
            n = Math.floor(n / 8);
        }
        const octalValue = array.reverse().join('');
        resulOctal.textContent = octalValue;
    }

    const convertToHexadecimal = (n) => {
        const array = [];
        const arrayValues = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
        let residuo = 0;
        while (n > 0) {
            residuo = n % 16;
            array.push(arrayValues[residuo]);
            n = Math.floor(n / 16);
        }
        const hexadecimalValue = array.reverse().join('');
        resulHexadecimal.textContent = hexadecimalValue;
    }

    btnCalculate.addEventListener('click', () => {
        if (numberToConvert.value <= 0 || numberToConvert.value === '') {
            alert('Ingresa un número');
        } else {
            convertToBinary(numberToConvert.value);
            convertToOctal(numberToConvert.value);
            convertToHexadecimal(numberToConvert.value);
        }
    });

    btnDelete.addEventListener('click', clearValues);
});
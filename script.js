let calc = '';
        document.querySelector('#display').value = calc;

        document.addEventListener('keydown', (event) => {
            const validKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/', '.'];
            if (validKeys.includes(event.key)) {
                calc += event.key;
                document.querySelector('#display').value = calc;
            } else if (event.key === 'Enter') {
                try {
                    calc = eval(calc);
                    document.querySelector('#display').value = calc;
                } catch {
                    calc = '';
                    document.querySelector('#display').value = 'Error';
                }
            } else if (event.key === 'Backspace') {
                calc = calc.slice(0, -1);
                document.querySelector('#display').value = calc;
            }
        });
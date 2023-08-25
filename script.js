let string = '';
let prestring = '';
let buttons = document.querySelectorAll('.btn');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        console.log(e.target)
        if (e.target.innerHTML == '=') {
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML == 'AC') {
            string = '';
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'x') {
            string = string + '*';
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'Undo') {
            string = prestring;
            document.querySelector('input').value = string;
        }
        else {
            prestring = string;
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
})
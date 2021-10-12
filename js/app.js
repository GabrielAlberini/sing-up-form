const iFName = document.querySelector('#iFName');
const iLName = document.querySelector('#iLName');
const iEmail = document.querySelector('#iEmail');
const iPass = document.querySelector('#iPass');
const submit = document.querySelector('#submit');

submit.addEventListener('click', e => {
    e.preventDefault()
    checkImputs()
})

function checkImputs() {
    const checkiFName = iFName.value.trim();
    const checkiLName = iLName.value.trim();
    const checkiEmail = iEmail.value.trim();
    const checkiPass = iPass.value.trim();

    if(checkiFName === '') {
        setError(iFName, 'First Name cannot be empty!')
    } else {
        setSuccess(iFName, 'Ok!')
    }

    if(checkiLName === '') {
        setError(iLName, 'Last Name cannot be empty!')
    } else {
        setSuccess(iLName, 'Ok!')
    }

    if(checkiEmail === '') {
        setError(iEmail, 'E-mail cannot be empty!')
    } else if(!validateEmail(emailValue)) {
        setError(iEmail, 'Looks like this is not an email!')
    } else {
        setSuccess(email, 'Ok!')
    }

    if(checkiPass === '') {
        setError(iPass, 'Password cannot be empty!')
    } else {
        setSuccess(iPass, 'Ok!')
    }
}

function setError(input, message) {
    const formControl = input.parentElement;
    const messageError = formControl.querySelector('span');

    formControl.className = 'cont-input error';
    messageError.innerText = message;
}
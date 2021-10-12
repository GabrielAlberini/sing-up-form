//Recognizing the elements that I will to work.
const iFName = document.querySelector('#iFName');
const iLName = document.querySelector('#iLName');
const iEmail = document.querySelector('#iEmail');
const iPass = document.querySelector('#iPass');
const submit = document.querySelector('#submit');

//Messages that I will show in case that the entry it's not accepted.
const messages = ['Ok!', //Message if everything is Ok.
'First Name cannot be empty!', //Message for First Name in case that it be empty.
'Last Name cannot be empty!', //Message for Lirst Name in case that it be empty.
'E-mail cannot be empty!', //Message for Email in case that it be empty.
'Looks like this is not an email!', //Message for Emailin case that it be not be a valid email.
'Password cannot be empty!'] //Message for Pass in case that it be empty.

//Completed process at the time to make "clicking" in the button to submit.
submit.addEventListener('click', e => {
    e.preventDefault();
    checkImputs();
    cleanForm();
})

//Checking the inputs
function checkImputs() {
    if(iFName.value.trim() === '' || iFName.value.trim() === null) {
        setError(iFName, messages[1]);
    } else {
        setSuccess(iFName, messages[0]);
    }

    if(iLName.value.trim() === '' || iLName.value.trim() === null) {
        setError(iLName, messages[2]);
    } else {
        setSuccess(iLName, messages[0]);
    }

    if(iEmail.value.trim() === '' || iEmail.value.trim() === null) {
        setError(iEmail, messages[3]);
    } else if(!validateEmail(iEmail.value.trim())) {
        setError(iEmail, messages[4]);
    } else {
        setSuccess(iEmail, messages[0]);
    }

    if(iPass.value.trim() === '' || iPass.value.trim() === null) {
        setError(iPass, messages[5]);
    } else {
        setSuccess(iPass, messages[0]);
    }
}

//If there a error, to show this message.
function setError(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    formControl.className = 'form-control error';
    small.innerText = message;
}
//If there a success, to show this message.
function setSuccess(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')

    formControl.className = 'form-control success';
    small.innerText = message;
}
//Validation with regex for emails.
function validateEmail(iEmail) {
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    return re.test(String(iEmail).toLowerCase());
}
//After completing the form, this is cleaned. Yet I can´t take out his styles. Help please haha :)
function cleanForm() {
    const form = document.getElementById("cont-form");
    form.reset();
}
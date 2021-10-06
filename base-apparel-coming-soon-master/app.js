const form = document.getElementById('form')
const email = document.getElementById('email');



form.addEventListener('submit', e => {
    e.preventDefault();

    const emailValue = email.value;

    if(!validateEmail(emailValue)){
        form.classList.add('error')

    }else{

        form.classList.remove('error');
        form.classList.add('successful')
    }

})


function validateEmail(email) {
    const regularEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regularEx.test(String(email).toLowerCase());
}


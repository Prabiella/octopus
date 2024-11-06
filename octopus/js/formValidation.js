const usernameEl = document.querySelector('#username');
const telephoneEl = document.querySelector('#telephone');
const companyEl = document.querySelector('#company');
const emailEl = document.querySelector('#email');
const messageEl = document.querySelector('#message');
const input = document.querySelector('.form-control');
const selectEl = document.querySelector('#invalidCheck')
const selectMessage = document.querySelector('.invalid-feedback')
const validMessage = document.querySelector('#alert-all')
const closeBtn = document.querySelector('#close-btn')


const form = document.querySelector('#signup');


const checkUsername = () => {

    let valid = false;

    const min = 3,
        max = 25;

    const username = usernameEl.value.trim();

    if (!isRequired(username)) {
        showError(usernameEl, 'Campo requerido');
    } else if (!isBetween(username.length, min, max)) {
        showError(usernameEl, `Tu nombre debe contener entre ${min} a ${max} carácteres.`)
    } else {
        showSuccess(usernameEl);
        valid = true;
    }
    return valid;


  

};

const checkTelephone = () => {

    let valid = false;

    const min = 10,
        max = 10;

    const telephone = telephoneEl.value.trim();

    if (!isRequired(telephone)) {
        showError(telephoneEl, 'Campo requerido');
    } else if (!isBetween(telephone.length, min, max)) {
        showError(telephoneEl, `Número de ${min} dígitos.`)
    }else {
        showSuccess(telephoneEl);
        valid = true;
    }
    return valid;
};
const checkEmail = () => {
    let valid = false;
    const email = emailEl.value.trim();
    if (!isRequired(email)) {
        showError(emailEl, 'Campo requerido');
    } else if (!isEmailValid(email)) {
        showError(emailEl, 'Correo no válido')
    } else {
        showSuccess(emailEl);
        valid = true;
    }
    return valid;
};


const checkCompany = () => {

    let valid = false;
    const company = companyEl.value.trim();

    if (!isRequired(company)) {
        showError(companyEl, 'Campo requerido');
    } else {
        showSuccess(companyEl);
        valid = true;
    }
    return valid;
};

const checkMessage= () => {

    let valid = false;

    const min = 5,
        max = 200;

    const message = messageEl.value.trim();

    if (!isRequired(message)) {
        showError(messageEl, 'Campo requerido');
    } else if (!isBetween(message.length, min, max)) {
        showError(messageEl, `Tu mensaje debe tener entre ${min} y ${max} carácteres.`)
    } else {
        showSuccess(messageEl);
        valid = true;
    }
    return valid;
};

const checkSelect = () => {

    let valid = false;
    
    if (selectEl.checked === false){
        selectMessage.style.display = "block"
        
      } else {
        selectMessage.style.display = "none"
        valid = true;
      }
      return valid;
};

const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};


/*const isTelephoneValid = (tel) => {
    const re = "^[0-9]+$";
    return re.test(tel);
};*/

const isRequired = value => value === '' ? false : true;
const isBetween = (length, min, max) => length < min || length > max ? false : true;


const showError = (input, message) => {
    // get the form-field element
    const formField = input.parentElement;
    // add the error class
    formField.classList.remove('success');
    formField.classList.add('error');

    // show the error message
    const error = formField.querySelector('small');
    error.textContent = message;
};

const showSuccess = (input) => {
    // get the form-field element
    const formField = input.parentElement;

    // remove the error class
    formField.classList.remove('error');
    formField.classList.add('success');

    // hide the error message
    const error = formField.querySelector('small');
    error.textContent = '';
}

closeBtn.addEventListener("click", () => {
    validMessage.style.display="none";
}) 

form.addEventListener('submit', function (e) {
    // prevent the form from submitting
    e.preventDefault();

    // validate fields
    let isUsernameValid = checkUsername(),
        isEmailValid = checkEmail(),
        isTelephoneValid = checkTelephone(),
        isCompanyValid = checkCompany(),
        isSelectValid = checkSelect(),
        isMessageValid = checkMessage();

    let isFormValid = isUsernameValid &&
        isEmailValid &&
        isTelephoneValid &&
        isMessageValid &&
        isSelectValid &&
        isCompanyValid;

    // submit to the server if the form is valid
    if (isFormValid) {
        validMessage.style.display="block";
    }
});


const debounce = (fn, delay = 500) => {
    let timeoutId;
    return (...args) => {
        // cancel the previous timer
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        // setup a new timer
        timeoutId = setTimeout(() => {
            fn.apply(null, args)
        }, delay);
    };
};

form.addEventListener('input', debounce(function (e) {
    switch (e.target.id) {
        case 'username':
            checkUsername();
            break;
        case 'email':
            checkEmail();
            break;
        case 'telephone':
            checkTelephone();
            break;
        case 'company':
            checkCompany();
            break;
        case 'message':
            checkMessage();
            break;
    }
}));

/*Validate Numbers*/
onload = function(){ 
    var ele = document.querySelectorAll('.validateNumber')[0];
    ele.onkeypress = function(e) {
       if(isNaN(this.value+String.fromCharCode(e.charCode)))
          return false;
    }
    ele.onpaste = function(e){
       e.preventDefault();
    }
  }